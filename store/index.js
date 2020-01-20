import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import {loadState,saveState} from '../src/localStorage'

const savedState = loadState()

const store = initialState =>
{
    const reduxstore = createStore(rootReducer,savedState, applyMiddleware(thunk) )
    reduxstore.subscribe(()=>
         saveState(reduxstore.getState())
    )
    return reduxstore
}
export const initializeStore = store
export default store
