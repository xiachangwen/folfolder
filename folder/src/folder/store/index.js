import {createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import shop from './shop/shop'

const reducer = combineReducers({
    shop
})

const store = createStore(reducer,applyMiddleware(thunk,logger))

window.store = store
export default store
