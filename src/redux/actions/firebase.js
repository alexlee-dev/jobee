import * as firebase from 'firebase/app'
import 'firebase/firestore'
import { setLoadingState } from './app'

export const SET_DATABASE_CONNECTED = 'SET_DATABASE_CONNECTED'
export const SIGN_IN = 'SIGN_IN'

export const setDatabaseConnected = isDatabaseConnected => ({
  type: SET_DATABASE_CONNECTED,
  payload: { isDatabaseConnected }
})

const connectToDatabase = () => {
  return new Promise((resolve, reject) => {
    const db = firebase.firestore()
    db ? resolve() : reject('Firestore is not connected.')
  })
}

export const checkDatabaseConnection = () => {
  return dispatch => {
    return connectToDatabase()
      .then(() => {
        dispatch(setDatabaseConnected(true))
        dispatch(setLoadingState(false))
      })
      .catch(err => {
        console.log(err)
        dispatch(setDatabaseConnected(false))
      })
  }
}
