import { database } from '../../firebase/firestore'
import { setLoadingState, setCurrentScreen } from './app'

// * Action Types
export const SET_USER = 'SET_USER'
export const SET_HAS_CHECKED_FOR_USER = 'SET_HAS_CHECKED_FOR_USER'
export const GET_DATABASE = 'GET_DATABASE'
export const SET_DATABASE = 'SET_DATABASE'
export const GET_USER_PREFERENCES = 'GET_USER_PREFERENCES'
export const SET_USER_PREFERENCES = 'SET_USER_PREFERENCES'

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
