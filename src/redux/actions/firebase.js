import { database } from '../../firebase/firestore'
import { setLoadingState } from './app';

// * Action Types
export const SET_USER = 'SET_USER'
export const SET_HAS_CHECKED_FOR_USER = 'SET_HAS_CHECKED_FOR_USER'
export const GET_DATABASE = 'GET_DATABASE'
export const SET_DATABASE = 'SET_DATABASE'

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

// * Promises
const getAllDocumentsFromCollection = collectionName => {
  return new Promise((resolve, reject) => {
    const db = database
    db.collection(collectionName)
      .get()
      .then(querySnapshot => {
        const jobArray = []
        querySnapshot.forEach(document => {
          const documentObject = {
            id: [document.id],
            data: document.data()
          }
          jobArray.push(documentObject)
        })
        resolve(jobArray)
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
