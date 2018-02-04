//import { initState } from '../store/state'
const initialState = {
  num: 1,
  count:10
}
Object.assign = require('object-assign')

export function test(state = initialState, action) {
  var newstate = Object.assign({}, state)
  //console.log('test', initState, newstate, state)
  switch(action.type) {
    case 'ADD_NUM':
      newstate.num++;
      return newstate
    case 'DELETE_NUM':
    newstate.num--;
      return newstate

    default: return state
  }
}