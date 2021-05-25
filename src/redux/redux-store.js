import productsReducer from "./products-reducer";
import {combineReducers, createStore} from "redux";
import loginReducer from "./login-reducer";
import adminReducer from "./admin-reducer";

let reducers = combineReducers({
    productsPage: productsReducer,
    loginPage: loginReducer,
    adminPage: adminReducer
})

let store = createStore(reducers)
window.store = store

export default store
