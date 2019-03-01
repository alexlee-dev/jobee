import firebase from 'firebase/app'
import config from './config'

if (process.env.CI !== 'true') {
  firebase.initializeApp(config)
}
