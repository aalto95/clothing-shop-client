import productsReducer from "./products-reducer";
import {combineReducers, createStore} from "redux";
import loginReducer from "./login-reducer";

let reducers = combineReducers({
    productsPage: productsReducer,
    loginPage: loginReducer
})

let store = createStore(reducers)
window.store = store

export default store
