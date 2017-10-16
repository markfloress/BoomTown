import { mainURL } from '../constants'


// ACTIONS
const getUsersBegin = () => {
  return { type: 'GET_USERS_BEGIN' }
}

const getUsersSuccess = () => {
  return { type: 'GET_USERS_SUCCESS' }
}

const getUsersError = (error) => {
  return { type: 'GET_USERS_ERROR', error }
}


// HELPERS
export const getUsers = (dispatch) => {
    dispatch(getUsersBegin())
    return fetch(`${mainURL}/users`)
      .then(response => {
        dispatch(getUsersSuccess())
        return response.json()
      }).catch(err => {
        dispatch(getUsersError(err))
      })
  }