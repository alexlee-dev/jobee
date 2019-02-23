import * as firebase from 'firebase/app'
import 'firebase/auth'
// import {
//   setError,
//   setStatus,
//   clearErrors,
//   setInfo
// } from '../redux/actions/user'
// import { closeEditModal, setEditModalInfo } from '../redux/actions/ui'
// import {
//   createBody,
//   createTitle,
//   handleCancel,
//   handleReauthSubmit
// } from '../util/UserSettings'

// Observer
// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     console.log('USER SIGNED IN')
//     console.log({
//       displayName: user.displayName,
//       email: user.email,
//       emailVerified: user.emailVerified,
//       isAnonymous: user.isAnonymous,
//       uid: user.uid,
//       providerData: user.providerData
//     })
//   } else {
//     console.log('USER SIGNED OUT')
//   }
// })


const provider = new firebase.auth.GoogleAuthProvider()

export const signInWithRedirect = () => firebase.auth().signInWithRedirect(provider);






// export const authorizeUser = (email, password, dispatch) => {
//   console.log('trying with: ', email, password)
//   try {
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(res => {
//         const { displayName, email } = res.user
//         if (res.user) {
//           const info = {
//             displayName,
//             email
//           }
//           dispatch(setStatus(true))
//           dispatch(setInfo(info))
//         }
//       })
//       .catch(error => {
//         switch (error.code) {
//           case 'auth/invalid-email':
//             dispatch(setError({ email: 'Invalid email', password: null }))
//             break
//           case 'auth/user-disabled':
//             dispatch(
//               setError({
//                 email: 'This user account is disabled',
//                 password: null
//               })
//             )
//             break
//           case 'auth/user-not-found':
//             dispatch(setError({ email: 'User not found', password: null }))
//             break
//           case 'auth/wrong-password':
//             dispatch(setError({ email: null, password: 'Incorrect password' }))
//             break
//           default:
//             break
//         }
//         console.error('Error logging in.')
//         console.error({
//           code: error.code,
//           message: error.message,
//           email,
//           password
//         })
//       })
//   } catch (error) {
//     console.error(error)
//   }
// }

// export const signOutUser = dispatch => {
//   firebase
//     .auth()
//     .signOut()
//     .then(() => {
//       dispatch(clearErrors())
//       dispatch(setStatus(false))
//     })
//     .catch(err => console.error(err))
// }

// export const refreshUser = dispatch => {
//   console.log('getting user info...')
//   const user = firebase.auth().currentUser
//   const info = {
//     displayName: user.displayName,
//     email: user.email
//   }
//   console.log(user)
//   dispatch(setInfo(info))
//   dispatch(closeEditModal())
// }

// export const updateUserProfile = (dispatch, profileObject) => {
//   firebase
//     .auth()
//     .currentUser.updateProfile(profileObject)
//     .then(() => refreshUser(dispatch))
//     .catch(error => {
//       console.error(error)
//       alert(error)
//     })
// }

// export const getCurrentUser = () => {
//   console.log(firebase.auth().currentUser)
// }

// export const reauthenticateUser = (dispatch, { email, password }) => {
//   console.log(`reauthenticating user: ${email}`)

//   const credential = firebase.auth.EmailAuthProvider.credential(email, password)

//   console.log('credential', credential)

//   return new Promise((resolve, reject) => {
//     firebase
//       .auth()
//       .currentUser.reauthenticateAndRetrieveDataWithCredential(credential)
//       .then(res => {
//         console.log('SUCCESS! RESPONSE: ', res)
//         resolve(res)
//       })
//       .catch(error => {
//         switch (error.code) {
//           case 'auth/user-mismatch':
//             dispatch(
//               setError({
//                 email: 'Email does not match previously signed in user.',
//                 password: null
//               })
//             )
//             const infoObject = {
//               body: createBody(handleCancel, handleReauthSubmit, 'REAUTH'),
//               title: createTitle('REAUTH')
//             }
//             dispatch(setEditModalInfo(infoObject))
//             // dispatch(closeEditModal())
//             // dispatch(openEditModal())
//             break
//           default:
//             break
//         }
//         console.error(error)
//         reject(error)
//         alert(error)
//       })
//   })
// }

// export const setNewPassword = (dispatch, newPassword) => {
//   try {
//     firebase
//       .auth()
//       .currentUser.updatePassword(newPassword)
//       .then(() => {
//         console.log('PASSWORD UPDATE SUCCESS!')
//         dispatch(closeEditModal())
//       })
//       .catch(error => {
//         console.error(error)
//         alert(error)
//       })
//   } catch (error) {
//     console.error(error)
//     alert(error)
//   }
// }
