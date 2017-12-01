export const getFilterTags = (data) => {
  return { type: 'GET_FILTERED_TAGS', data }
}

const initialState = {
  filterTags: []
}

export default (state= initialState, action) => {
  switch(action.type) {
    case 'GET_FILTERED_TAGS':
      return {
        ...state,
        filterTags: action.data
      }

    default: 
      return state
  }
}