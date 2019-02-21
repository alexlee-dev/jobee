"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkIfDocumentExists = exports.storeNewDocument = void 0;

var firebase = _interopRequireWildcard(require("firebase/app"));

require("firebase/firestore");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
var db = firebase.firestore();
/**
 * Stores data in a document.
 * @param {String} documentId Unique string to identify the document.
 * @param {Object} data Object of data to store in the document.
 */

var storeNewDocument = function storeNewDocument(documentId, data) {
  return db.collection('jobs').doc(documentId).set(data);
};

exports.storeNewDocument = storeNewDocument;

var checkIfDocumentExists = function checkIfDocumentExists(documentId) {
  return new Promise(function (resolve, reject) {
    // Collection
    var collectionRef = db.collection('jobs'); // Document

    var docRef = collectionRef.doc(documentId);
    docRef.get().then(function (doc) {
      if (doc.exists) {
        resolve(true);
      } else {
        resolve(false);
      }
    }).catch(function (error) {
      return reject(error);
    });
  });
};

exports.checkIfDocumentExists = checkIfDocumentExists;