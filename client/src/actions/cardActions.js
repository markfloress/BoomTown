import { mainURL } from '../constants'
import { getUsers } from './userActions'


// ACTIONS
const getCardItemsBegin = () => {
  return { type: 'GET_CARD_ITEMS_BEGIN' }
}

const getCardItemsSuccess = (items, users) => {
  return { type: 'GET_CARD_ITEMS_SUCCESS', items, users }
}

const getCardItemsError = (error) => {
  return { type: 'GET_CARD_ITEMS_ERROR', error }
}


// HELPERS
export const getCardItems = () => {
  return (dispatch) => {
    dispatch(getCardItemsBegin())
    return fetch(`${mainURL}/items`)
      .then(response => response.json())
      .then(items => {
        return getUsers(dispatch).then(users => {
          dispatch(getCardItemsSuccess(items, users))
        })
      }).catch(err => {
        dispatch(getCardItemsError(err))
      })
  }
}