import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appReducer from '../reducers/app'
import firebaseReducer from '../reducers/firebase'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  combineReducers({
    app: appReducer,
    firebase: firebaseReducer
  }),
  composeEnhancer(applyMiddleware(thunk))
)
