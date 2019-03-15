import * as firebase from 'firebase/app'
import 'firebase/auth'

const provider = new firebase.auth.GoogleAuthProvider()

// export const signInWithRedirect = () =>
//   firebase.auth().signInWithRedirect(provider)
// export const signInWithCredentials = () => firebase.au
export const createNewUserAccount = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(thing => {
      console.log('User created.')
      console.log({ thing })
    })
    .catch(error => {
      console.log('Error while creating user.')
      console.log({ error })
    })
}

export const getRedirectResult = () => firebase.auth().getRedirectResult()

export const signOut = () => firebase.auth().signOut()
