const SET_PRODUCTS = 'SET-PRODUCTS'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const ADD_TO_CART = 'ADD-TO-CART'
const CHECKOUT = 'CHECKOUT'
const REMOVE_FROM_CART = 'REMOVE-FROM-CART'
const ADD_ONE = 'ADD-ONE'
const SUBTRACT_ONE = 'SUBTRACT-ONE'

let initialState = {
    groceries: [],
    isFetching: false,
    cart: [],
    cartSize: 0
}

const productsReducer = (state = initialState, action) => {

    let newCartSize
    switch(action.type) {
        case SET_PRODUCTS:
            return {
                ...state, groceries: action.groceries
            }
        case ADD_TO_CART:
            newCartSize = state.cartSize + 1
            return {
                ...state,
                ...state.cart.push(Object.assign(state.groceries[action.id], {quantity: 1}, {cartId: state.cart.length})),
                cartSize: newCartSize
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case CHECKOUT:
            return  {
                ...state,
                cart: [],
                cartSize: 0
            }
        case ADD_ONE:
            newCartSize = state.cartSize + 1
            return {
                ...state,
                ...state.cart[action.id].quantity += 1,
                cartSize: newCartSize
            }
        case SUBTRACT_ONE:
            newCartSize = state.cartSize - 1
            return {
                ...state,
                ...state.cart[action.id].quantity -= 1,
                cartSize: newCartSize,

            }
        case REMOVE_FROM_CART:
            newCartSize = state.cartSize - state.cart[action.id].quantity
            return {
                ...state,
                ...state.cart.splice(action.id, 1),
                cartSize: newCartSize

            }
        default:
            return state
    }
}

export let setProducts = (groceries) => ({ type: SET_PRODUCTS, groceries })
export let toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export let addToCart = (id) => ({ type: ADD_TO_CART, id })
export let addOne = (id) => ({ type: ADD_ONE, id })
export let subtractOne = (id) => ({ type: SUBTRACT_ONE, id })
export let checkout = () => ({ type: CHECKOUT, })
export let removeFromCart = (id) => ({ type: REMOVE_FROM_CART, id })

export default productsReducer