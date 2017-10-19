import { combineReducers } from 'redux'
import cardReducer from './cardReducer'
import client from '../config/apolloClient'

export const rootReducer = combineReducers({
  apollo: client.reducer(),
  users: cardReducer
}); 