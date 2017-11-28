import { createStore, applyMiddleware, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import cardReducer from '../reducers/cardReducer'
import client from '../config/apolloClient'
import loginReducer from './loginReducer'

const rootReducer = combineReducers({
  apollo: client.reducer(),
  users: cardReducer,
  form: formReducer,
  auth: loginReducer
}); 

const store = (initialState) => {
  const middleware = process.env.NODE_ENV !== 'production' ? 
  [client.middleware() ,thunk, createLogger()] : [ thunk, client.middleware() ]

  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

  const store = createStoreWithMiddleware(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  return store
}




export default store