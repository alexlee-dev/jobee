import * as firebase from 'firebase/app'
import 'firebase/firestore'
// import 'firebase/auth'
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

const db = firebase.firestore()

/**
 * Stores data in a document.
 * @param {String} documentId Unique string to identify the document.
 * @param {Object} data Object of data to store in the document.
 */
export const storeNewDocument = (documentId, data) =>
  db
    .collection('jobs')
    .doc(documentId)
    .set(data)

export const checkIfDocumentExists = documentId => {
  return new Promise((resolve, reject) => {
    // Collection
    const collectionRef = db.collection('jobs')
    // Document
    const docRef = collectionRef.doc(documentId)

    docRef
      .get()
      .then(doc => {
        if (doc.exists) {
          resolve(true)
        } else {
          resolve(false)
        }
      })
      .catch(error => reject(error))
  })
}
