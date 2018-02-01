import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { initState } from './state'

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configStore(reducers, defaultState = initState){
	return createStoreWithMiddleware(reducers, defaultState);
}