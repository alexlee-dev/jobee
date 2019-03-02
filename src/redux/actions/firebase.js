import { database } from '../../firebase/firestore'
import { setLoadingState, setCurrentScreen } from './app'

// * Action Types
export const SET_USER = 'SET_USER'
export const SET_HAS_CHECKED_FOR_USER = 'SET_HAS_CHECKED_FOR_USER'
export const GET_DATABASE = 'GET_DATABASE'
export const SET_DATABASE = 'SET_DATABASE'
export const GET_USER_PREFERENCES = 'GET_USER_PREFERENCES'
export const SET_USER_PREFERENCES = 'SET_USER_PREFERENCES'
export const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST'
export const SET_WATCHLIST = 'SET_WATCHLIST'
export const SET_WATCHLIST_INDEX = 'SET_WATCHLIST_INDEX'

// * Action Generators
export const setHasCheckedForUser = hasCheckedForUser => ({
  type: SET_HAS_CHECKED_FOR_USER,
  payload: { hasCheckedForUser }
})
export const setUser = user => ({ type: SET_USER, payload: { user } })
export const setDatabase = (collectionName, dataArray) => ({
  type: SET_DATABASE,
  payload: { collectionName, dataArray }
})
export const setUserPreferences = userPreferences => ({
  type: SET_USER_PREFERENCES,
  payload: { userPreferences }
})

export const setWatchlist = watchlist => ({
  type: SET_WATCHLIST,
  payload: { watchlist }
})
export const setWatchlistIndex = watchlistIndex => ({
  type: SET_WATCHLIST_INDEX,
  payload: { watchlistIndex }
})
export const removeFromWatchlist = documentId => ({
  type: REMOVE_FROM_WATCHLIST,
  payload: { documentId }
})
///////////////////

// * Promises
const getAllDocumentsFromCollection = collectionName => {
  return new Promise((resolve, reject) => {
    console.log(`Getting all documents from ${collectionName} ...`)
    const db = database
    db.collection(collectionName)
      .get()
      .then(querySnapshot => {
        const documentArray = []
        querySnapshot.forEach(document => {
          const documentObject = {
            id: document.id,
            data: document.data()
          }
          documentArray.push(documentObject)
        })
        console.log(`✅ Successfully got all documents from ${collectionName}.`)
        console.log(`Resolving with: ${JSON.stringify(documentArray, null, 2)}`)
        resolve(documentArray)
      })
      .catch(error => {
        console.log(
          `❗ Error while getting all documents from ${collectionName}.`
        )
        console.log(error)
        reject(error)
      })
  })
}

const getSingleDocumentFromCollection = (collectionName, documentId) => {
  return new Promise((resolve, reject) => {
    console.log(`Getting ${documentId} from ${collectionName} ...`)
    const db = database
    const docRef = db.collection(collectionName).doc(documentId)
    docRef.get().then(doc => {
      if (doc.exists) {
        console.log(`✅ Successfully got ${documentId} from ${collectionName}.`)
        console.log(`Resolving with: ${JSON.stringify(doc.data(), null, 2)}`)
        resolve(doc.data())
      } else {
        console.log(
          `❗ Error while getting ${documentId} from ${collectionName}`
        )
        reject({ reason: 'Document does not exist.' })
      }
    })
  })
}

const setDocument = (collectionName, documentId, data) => {
  return new Promise((resolve, reject) => {
    console.log(
      `Setting ${documentId} in ${collectionName} as: ${JSON.stringify(
        data,
        null,
        2
      )} ...`
    )
    const db = database
    db.collection(collectionName)
      .doc(documentId)
      .set(data)
      .then(() => {
        console.log(
          `✅ Successfully set ${documentId} in ${collectionName} as ${JSON.stringify(
            data,
            null,
            2
          )}.`
        )
        console.log(`Resolving.`)
        resolve()
      })
      .catch(error => {
        console.log(
          `❗ Error while setting ${documentId} in ${collectionName} as ${data}.`
        )
        reject(error)
      })
  })
}

const updateFieldInDocument = (
  collectionName,
  documentId,
  fieldToUpdate,
  data
) => {
  return new Promise((resolve, reject) => {
    console.log(
      `Updating ${fieldToUpdate} in ${documentId} of ${collectionName} with ${data} ...`
    )
    const db = database
    db.collection(collectionName)
      .doc(documentId)
      .update({
        [fieldToUpdate]: data
      })
      .then(() => {
        console.log(
          `✅ Successfully updated ${fieldToUpdate} in ${documentId} of ${collectionName} with ${data}.`
        )
        console.log('Resolving.')
        resolve()
      })
      .catch(error => {
        console.log(
          `❗ Error while updating ${fieldToUpdate} in ${documentId} of ${collectionName} with ${data}.`
        )
        reject(error)
      })
  })
}

///////////////////

// * Thunk Actions
export const getAndSetStartData = uid => {
  return dispatch => {
    return getAllDocumentsFromCollection('users')
      .then(usersArray => {
        // * This is a current user
        const desiredUser = usersArray.find(userObj => userObj.id === uid)
        const userPreferences = desiredUser.data
        getAllDocumentsFromCollection('jobs')
          .then(jobArray => {
            dispatch(setUserPreferences(userPreferences))
            dispatch(setDatabase('jobs', jobArray))
            dispatch(setCurrentScreen('jobs'))
            dispatch(setLoadingState(false))
          })
          .catch(error => {
            console.warn('Error while trying to get documents from database.')
            console.error(error)
          })
      })
      .catch(() => {
        // * This is a a new user.
        // * Add user to /users
        getAllDocumentsFromCollection('jobs')
          .then(jobArray => {
            const arrayOfIds = jobArray.map(({ id }) => {
              return id
            })
            console.log({ arrayOfIds })
            const initialPreferences = {
              watchlist: arrayOfIds,
              watchlistIndex: 0
            }
            setDocument('users', uid, initialPreferences)
              .then(() => {
                dispatch(setUserPreferences(initialPreferences))
                dispatch(setDatabase('jobs', jobArray))
                dispatch(setCurrentScreen('jobs'))
                dispatch(setLoadingState(false))
              })
              .catch(error => console.error(error))
          })
          .catch(error => {
            console.warn('Error while trying to get documents from database.')
            console.error(error)
          })
          .catch(error => console.error(error))
      })
  }
}

export const removeJobFromWatchlist = (uid, documentId) => {
  return dispatch => {
    return getSingleDocumentFromCollection('users', uid)
      .then(userObj => {
        const { watchlist } = userObj
        const newWatchlist = watchlist.filter(jobId => jobId !== documentId)
        console.log(`Old watchlist length: ${watchlist.length}`)
        console.log(`New watchlist length: ${newWatchlist.length}`)
        updateFieldInDocument('users', uid, 'watchlist', newWatchlist)
          .then(() => {
            dispatch(setWatchlist(newWatchlist))
            dispatch(setLoadingState(false))
          })
          .catch(error => {
            console.error(error)
            dispatch(setLoadingState(false))
          })
      })
      .catch(error => console.error(error))
  }
}

export const continueWatchingJob = (uid, currentWatchlistIndex) => {
  const newWatchlistIndex = currentWatchlistIndex + 1
  return dispatch => {
    return updateFieldInDocument(
      'users',
      uid,
      'watchlistIndex',
      newWatchlistIndex
    )
      .then(() => {
        dispatch(setWatchlistIndex(newWatchlistIndex))
        dispatch(setLoadingState(false))
      })
      .catch(error => {
        console.error(error)
        dispatch(setLoadingState(false))
      })
  }
}
