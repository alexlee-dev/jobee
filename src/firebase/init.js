import firebase from 'firebase/app'
import config from './config'

console.log({ config })

firebase.initializeApp(config)
