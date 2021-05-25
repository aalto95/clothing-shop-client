const SHOW_DETAILS = 'SHOW-DETAILS'
const ADD_TO_CART = 'ADD-TO-CART'
const SET_PRODUCTS = 'SET-PRODUCTS'
const CHECKOUT = 'CHECKOUT'
const REMOVE_FROM_CART = 'REMOVE-FROM-CART'
const ADD_ONE = 'ADD-ONE'
const SUBTRACT_ONE = 'SUBTRACT-ONE'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState = {
    groceries: [],
    cart: [],
    isFetching: false,
    cartSize: 0
}

const productsReducer = (state = initialState, action) => {
    let stateCopy = Object.assign({}, state)
    let newCartSize
    switch(action.type) {
        case CHECKOUT:
            return  {
                ...state,
                cart: [],
                cartSize: 0
            }
        case SET_PRODUCTS:
            return {
                ...state, groceries: action.groceries
            }
        case SHOW_DETAILS:
            return stateCopy
        case ADD_TO_CART:
            newCartSize = state.cartSize + 1
            return {
                ...state,
                ...state.cart.push(Object.assign(state.groceries[action.id], {quantity: 1}, {cartId: state.cart.length})),
                cartSize: newCartSize
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
                cartSize: newCartSize
            }
        case REMOVE_FROM_CART:
            newCartSize = state.cartSize - state.cart[action.id].quantity
            return {
                ...state,
                ...state.cart.splice(action.id, 1),
                cartSize: newCartSize

            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return stateCopy
    }
}

export let showDetails = (id) => ({ type: SHOW_DETAILS, id })
export let addToCart = (id) => ({ type: ADD_TO_CART, id })
export let addOne = (id) => ({ type: ADD_ONE, id })
export let subtractOne = (id) => ({ type: SUBTRACT_ONE, id })
export let setProducts = (groceries) => ({ type: SET_PRODUCTS, groceries })
export let checkout = () => ({ type: CHECKOUT, })
export let removeFromCart = (id) => ({ type: REMOVE_FROM_CART, id })
export let toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default productsReducer