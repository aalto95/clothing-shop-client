import {productsAPI} from "../api/api";
import {toggleIsFetching} from "./products-reducer";

const FETCH_ALL_ITEMS = 'FETCH_ALL_ITEMS'
const SET_ITEMS = 'SET_ITEMS'

let initialState = {
    items: null
}

const adminReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ITEMS:
            return {
                ...state,
                items: action.items
            }
        default:
            return state
    }
}

export let setItems = (items) => ({ type: SET_ITEMS, items})

export let fetchAllItems = () => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await productsAPI.getProducts()
    dispatch(toggleIsFetching(false))
    dispatch(setItems(response))
}

export default adminReducer
