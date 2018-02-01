export function Test(state={}, action) {
  switch(action.type) {
    case 'ADD_NUM':
    let newState1 = state;
    console.log(state);
    newState1.home.num = 100;
      return newState1;

    case 'DELETE_NUM':
    let newState = state;
    newState.home.num = -100;
      return newState;

    default: return state;
  }
}