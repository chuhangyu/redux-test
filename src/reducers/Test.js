import { initState } from '../store/state'
Object.assign = require('object-assign')

export function test(state = initState, action) {
  var newstate = Object.assign({}, state)
  switch(action.type) {
    case 'ADD_NUM':
      newstate.num = newstate.num + 1
      return newstate
    case 'DELETE_NUM':
      newstate.num = newstate.num - 1
      return newstate

    default: return state
  }
}