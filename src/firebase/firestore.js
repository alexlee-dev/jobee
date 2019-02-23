import * as firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()

export const testDB = () => console.log({ db })

// /**
//  * Stores data in a document.
//  * @param {String} documentId Unique string to identify the document.
//  * @param {Object} data Object of data to store in the document.
//  */
// export const storeNewDocument = (documentId, data) =>
//   db
//     .collection('jobs')
//     .doc(documentId)
//     .set(data)

// export const checkIfDocumentExists = documentId => {
//   return new Promise((resolve, reject) => {
//     // Collection
//     const collectionRef = db.collection('jobs')
//     // Document
//     const docRef = collectionRef.doc(documentId)

//     docRef
//       .get()
//       .then(doc => {
//         if (doc.exists) {
//           resolve(true)
//         } else {
//           resolve(false)
//         }
//       })
//       .catch(error => reject(error))
//   })
// }
