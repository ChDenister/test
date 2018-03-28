import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from '../reducers/index';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

export const storeFactory = (initialState = initialState) =>composeWithDevTools(
    applyMiddleware(thunk, logger))(createStore)(
    rootReducer)


