import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appReducer from '../reducers/app'
import uiReducer from '../reducers/ui'

export default createStore(
  combineReducers(
    {
      app: appReducer,
      ui: uiReducer
    },
    applyMiddleware(thunk)
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
