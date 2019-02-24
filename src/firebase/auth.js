import * as firebase from 'firebase/app'
import 'firebase/auth'

const provider = new firebase.auth.GoogleAuthProvider()

export const signInWithRedirect = () =>
  firebase.auth().signInWithRedirect(provider)

export const getRedirectResult = () => firebase.auth().getRedirectResult()









// import * as firebase from 'firebase/app'
// import 'firebase/auth'

// // const provider = new firebase.auth.GoogleAuthProvider()

// export const signInWithRedirect = () => {
//   var provider = new firebase.auth.GoogleAuthProvider()
//   console.log({ provider })
//   // firebase.auth().signInWithRedirect(provider)
//   firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then(function(result) {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       var token = result.credential.accessToken
//       // The signed-in user info.
//       var user = result.user
//       // ...
//       console.log({ token, user })
//     })
//     .catch(function(error) {
//       // Handle Errors here.
//       var errorCode = error.code
//       var errorMessage = error.message
//       // The email of the user's account used.
//       var email = error.email
//       // The firebase.auth.AuthCredential type that was used.
//       var credential = error.credential
//       // ...
//       console.log({ errorCode, errorMessage, email, credential })
//     })
// }

// // export const signInWithRedirect = () => {
// //   console.log('got here')
// //   // TODO: This isn't working?
// //   // * Trying to click on log in button to be redirected to google login page
// //   // * was working before. Is not working now.
// //   firebase
// //     .auth()
// //     .signInWithPopup(provider)
// //     .then(result => console.log({ result }))
// //     .catch(err => console.log(err))
// // }

// export const getRedirectResult = () => firebase.auth().getRedirectResult()
