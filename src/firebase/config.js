import dotenv from 'dotenv'
dotenv.config()

const apiKey = process.env.FIREBASE_API_KEY
const authDomain = process.env.FIREBASE_AUTH_DOMAIN
const databaseURL = process.env.FIREBASE_DATABASE_URL
const projectId = process.env.FIREBASE_PROJECT_ID
const storageBucket = process.env.FIREBASE_STORAGE_BUCKET
const messagingSenderId = proccess.env.FIREBASE_MESSAGING_SENDER_ID

export default {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
}
