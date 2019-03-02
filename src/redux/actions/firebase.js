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
export const removeFromWatchlist = documentId => ({
  type: REMOVE_FROM_WATCHLIST,
  payload: { documentId }
})

///////////////////

// * Promises
const getAllDocumentsFromCollection = collectionName => {
  return new Promise((resolve, reject) => {
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
        resolve(documentArray)
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
  })
}

const getSingleDocumentFromCollection = (collectionName, documentId) => {
  return new Promise((resolve, reject) => {
    const db = database
    const docRef = db.collection(collectionName).doc(documentId)
    docRef.get().then(doc => {
      if (doc.exists) {
        resolve(doc.data())
      } else {
        reject({ reason: 'Document does not exist.' })
      }
    })
  })
}

const setDocument = (collectionName, documentId, data) => {
  return new Promise((resolve, reject) => {
    const db = database
    db.collection(collectionName)
      .doc(documentId)
      .set(data)
      .then(() => resolve())
      .catch(error => reject(error))
  })
}

const updateFieldInDocument = (
  collectionName,
  documentId,
  fieldToUpdate,
  data
) => {
  return new Promise((resolve, reject) => {
    const db = database
    db.collection(collectionName)
      .doc(documentId)
      .update({
        [fieldToUpdate]: data
      })
      .then(() => resolve())
      .catch(error => reject(error))
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
            const initialPreferences = { watchlist: jobArray }
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
        const newWatchlist = watchlist.filter(
          documentObj => documentObj.id !== documentId
        )
        updateFieldInDocument('users', uid, 'watchlist', newWatchlist)
          .then(() => {
            dispatch(setLoadingState(false))
            dispatch(setWatchlist(newWatchlist))
          })
          .catch(error => {
            console.error(error)
            dispatch(setLoadingState(false))
          })
      })
      .catch(error => console.error(error))
  }
}
