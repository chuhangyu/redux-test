const initialState = {
  num:1
}
export function Test(state=initialState, action) {
  switch(action.type) {
    case 'ADD_NUM':
      return {
        ...state,
        num: state.num+1
      }

    case 'DELETE_NUM':
        return {
          ...state,
          num: state.num - 1
        }

    default: return state;
  }
}