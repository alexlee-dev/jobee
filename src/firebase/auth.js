import * as firebase from 'firebase/app'
import 'firebase/auth'

const provider = new firebase.auth.GoogleAuthProvider()

export const signInWithRedirect = () =>
  firebase.auth().signInWithRedirect(provider)

export const getRedirectResult = () => firebase.auth().getRedirectResult()

export const signOut = () => firebase.auth().signOut()
