
const initialState = {
  users: [],
  errorMsg: {},
  isLoading: false
}

// HELPER

const mergeUserItems = (users, items) => {
  return users.map(user => {
    return {
      ...user,
      items : items.filter(item => item.itemOwner === user.id)
    }
  })
}

const mergeItemUsers = (users, items) => {
  return items.map(item => {
    return {
      ...item,
      user: users.filter(user => user.id === item.itemOwner)
    }
  })
}

export default (state = initialState, action) => {    // if export default, it will grab file name as the name
  switch(action.type) {
    case 'GET_CARD_ITEMS_BEGIN':    
    case 'GET_USERS_BEGIN':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_USERS_SUCCESS':
      return {
        ...state
      }

    case 'GET_CARD_ITEMS_SUCCESS':
      return {
        ...state,
        users: mergeUserItems(action.users, action.items),
        items: mergeItemUsers(action.users, action.items),      
        isLoading: false
      }
    case 'GET_USERS_ERROR':
    case 'GET_CARD_ITEMS_ERROR':
      return {
        ...state,
        errorMsg: action.error,
        isLoading: false
      }

    default:
      return state
  }
}