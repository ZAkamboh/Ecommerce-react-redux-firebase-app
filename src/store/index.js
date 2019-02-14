import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import appReducer from './reducer'
var rootreducer=combineReducers({
    appReducer

})

const store=createStore(rootreducer,applyMiddleware(thunk))
export default store