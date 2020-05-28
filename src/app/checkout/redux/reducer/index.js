import * as types from '../action-types/actionType'

const bookReducerInitialState = {
  errors: null,
}
const bookReducer = (state = bookReducerInitialState, action) => {
  switch (action.type) {
    case types.BOOK_ERROR:
      return {...state, errors: action.errors}
    default:
      return state
  }
}

export default bookReducer;