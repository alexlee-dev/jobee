import * as firebase from 'firebase/app'
import 'firebase/auth'
import store from '../redux/store/store'
import { setLoadingState, setOnboarding } from '../redux/actions/app'
import {
  setHasCheckedForUser,
  setUser,
  getAndSetStartData
} from '../redux/actions/firebase'
import { emptyUser } from '../constants'

// * Firebase User Observer
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in.
    console.log('User is signed in.')
    const { displayName, email, photoURL, uid } = user
    const userInfo = { displayName, email, photoURL, preferences: null, uid }
    store.dispatch(setHasCheckedForUser(true))
    store.dispatch(setUser(userInfo))
    store.dispatch(getAndSetStartData(uid))
  } else {
    // No user is signed in.
    console.log('User is not signed in.')
    store.dispatch(setHasCheckedForUser(true))
    store.dispatch(setUser(emptyUser))
    store.dispatch(setLoadingState(false))
  }
})
