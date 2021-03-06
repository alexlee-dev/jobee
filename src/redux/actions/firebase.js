import { database } from '../../firebase/firestore'
import { setOnboarding } from './app'
import { setLoadingState, setCurrentScreen } from './app'

// * Action Types
export const SET_COMPANIES = 'SET_COMPANIES'
export const SET_DATABASE = 'SET_DATABASE'
export const SET_HAS_CHECKED_FOR_USER = 'SET_HAS_CHECKED_FOR_USER'
export const SET_USER = 'SET_USER'
export const SET_USER_PREFERENCES = 'SET_USER_PREFERENCES'
export const SET_USER_PREFERENCE = 'SET_USER_PREFERENCE'
export const SET_WATCHLIST = 'SET_WATCHLIST'
export const SET_WATCHLIST_INDEX = 'SET_WATCHLIST_INDEX'

// * Action Generators
export const setCompanies = companies => ({
  type: SET_COMPANIES,
  payload: { companies }
})
export const setDatabase = (collectionName, dataArray) => ({
  type: SET_DATABASE,
  payload: { collectionName, dataArray }
})
export const setHasCheckedForUser = hasCheckedForUser => ({
  type: SET_HAS_CHECKED_FOR_USER,
  payload: { hasCheckedForUser }
})
export const setUser = user => ({ type: SET_USER, payload: { user } })
export const setUserPreferences = userPreferences => ({
  type: SET_USER_PREFERENCES,
  payload: { userPreferences }
})
export const setUserPreference = (preferenceName, data) => ({
  type: SET_USER_PREFERENCE,
  payload: { preferenceName, data }
})
export const setWatchlist = watchlist => ({
  type: SET_WATCHLIST,
  payload: { watchlist }
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
            getAllDocumentsFromCollection('companies')
              .then(companiesArray => {
                dispatch(setUserPreferences(userPreferences))
                // TODO: Set the user's fav companies here
                dispatch(setDatabase('companies', companiesArray))
                dispatch(setDatabase('jobs', jobArray))
                dispatch(setCurrentScreen('today'))
                dispatch(setLoadingState(false))
              })
              .catch(error => {
                console.warn(
                  'Error while trying to get documents from database.'
                )
                console.error(error)
              })
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
            getAllDocumentsFromCollection('companies')
              .then(companiesArray => {
                const arrayOfIds = jobArray.map(({ id }) => {
                  return id
                })
                const initialPreferences = {
                  companies: [],
                  watchlist: arrayOfIds
                }
                setDocument('users', uid, initialPreferences)
                  .then(() => {
                    dispatch(setUserPreferences(initialPreferences))
                    dispatch(setDatabase('jobs', jobArray))
                    dispatch(setDatabase('companies', companiesArray))
                    // dispatch(setCurrentScreen('today'))
                    dispatch(setOnboarding(true))
                    dispatch(setLoadingState(false))
                  })
                  .catch(error => console.error(error))
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

export const setInitialCompany = (uid, company) => {
  return (dispatch, getState) => {
    const currentUserPreferences = getState().firebase.user.preferences
    const newUserPreferences = Object.assign({}, currentUserPreferences, {
      companies: [company]
    })
    return setDocument('users', uid, newUserPreferences)
      .then(() => {
        dispatch(setUserPreferences(newUserPreferences))
        // dispatch(setOnboardingStep(1))
        dispatch(setCurrentScreen('today'))
        dispatch(setOnboarding(false))
        dispatch(setLoadingState(false))
      })
      .catch(error => console.error(error))
  }
}
