import productsReducer from "./products-reducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    productsPage: productsReducer,
})

let store = createStore(reducers)

export default store
