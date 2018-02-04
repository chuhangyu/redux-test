/**
 * Created by Administrator on 2016/7/2.
 */
// 初始化状态
//import { initState } from '../store/state'
const initialState = {
    navMain: [],
    bookDetails: [],
    num: 0
  }
Object.assign = require('object-assign')

export function home(state = initialState, action) {
    var newstate = Object.assign({}, state)
    switch (action.type) {
        case 'RECEIVE_NAV':
            newstate.navMain = action.navMain
            return newstate
        case 'RECEIVE_BOOK':
            newstate.bookDetails = action.bookDetails
            return newstate
        case 'ADD':
            return {
                ...state,
                num: state.num + 1
            };
        case 'DELETE':
            return {
                ...state,
                num: state.num - 1
            }
        default:
            return newstate
    }
}