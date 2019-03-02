import { database } from '../../firebase/firestore'
import { setLoadingState } from './app'

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
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}

// * Thunk Actions
export const getDatabase = () => {
  return dispatch => {
    return getAllDocumentsFromCollection('jobs')
      .then(jobArray => {
        dispatch(setDatabase('jobs', jobArray))
        dispatch(setLoadingState(false))
      })
      .catch(err => {
        console.warn('Error while trying to get documents from database.')
        console.err(err)
      })
  }
}

export const getUserPreferences = uid => {
  return dispatch => {
    return getAllDocumentsFromCollection('users')
      .then(usersArray => {
        console.log({ usersArray })
        // * Check if uid matches the id of any user object
        const desiredUser = usersArray.find(userObj => userObj.id === uid)
        const userPreferences = desiredUser.data
        // * Dispatch the userData to Redux
        dispatch(setUserPreferences(userPreferences))
      })
      .catch(err => {
        console.warn('Error while trying to get documents from database.')
        console.err(err)
        // TODO: Set up what to do if the uid does not match any document id in the database
      })
  }
}
