import * as firebase from 'firebase/app'
import 'firebase/firestore'

export const database = firebase.firestore()

firebase
  .firestore()
  .enablePersistence()
  .then(() => console.log('Persistence has been enabled.'))
  .catch(function(err) {
    if (err.code === 'failed-precondition') {
      console.log('Multiple browser tabs are open.')
      console.log('Persistence can only be enabled in one tab at a time.')
    } else if (err.code === 'unimplemented') {
      console.log(
        'The current browser does not support all of the features required to enable persistence.'
      )
    }
  })
