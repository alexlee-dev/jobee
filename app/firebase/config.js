const apiKey = Expo.Constants.manifest.extra.FIREBASE_API_KEY
const authDomain = Expo.Constants.manifest.extra.FIREBASE_AUTH_DOMAIN
const databaseURL = Expo.Constants.manifest.extra.FIREBASE_DATABASE_URL
const projectId = Expo.Constants.manifest.extra.FIREBASE_PROJECT_ID
const storageBucket = Expo.Constants.manifest.extra.FIREBASE_STORAGE_BUCKET
const messagingSenderId = Expo.Constants.manifest.extra.FIREBASE_MESSAGING_SENDER_ID

export default {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
}
