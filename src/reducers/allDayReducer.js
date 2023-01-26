import { ADD_ITEM, DELETE_ITEM } from '../actions/actionTypes.js'

const initialState = {
  list: [];
};

export default const allDayReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
    return {
      ...state,
      list: [...state.list, action.payload]
    }
  }
}