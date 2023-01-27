
const initialState = {
  list: []
};

export const allDayReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
    return {
      ...state,
      list: [...state.list, action.payload]
    };
    case 'DELETE_ITEM':
      return {
        ...state,
        list: state.list.filter(item => item !== action.payload)
      }
    default:
      return state;
  }
}

