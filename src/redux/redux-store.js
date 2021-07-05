import productsReducer from "./products-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import loginReducer from "./login-reducer";
import adminReducer from "./admin-reducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    productsPage: productsReducer,
    loginPage: loginReducer,
    adminPage: adminReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store
