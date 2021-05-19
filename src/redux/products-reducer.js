const SHOW_DETAILS = 'SHOW-DETAILS'
const ADD_TO_CART = 'ADD-TO-CART'
const SET_PRODUCTS = 'SET-PRODUCTS'
const CHECKOUT = 'CHECKOUT'
const REMOVE_FROM_CART = 'REMOVE-FROM-CART'
const ADD_ONE = 'ADD-ONE'
const SUBTRACT_ONE = 'SUBTRACT-ONE'

let initialState = {
    groceries: [],
    cart: []
}

const productsReducer = (state = initialState, action) => {
    let stateCopy = Object.assign({}, state)
    switch(action.type) {
        case CHECKOUT:
            return  {
                ...state, cart: []
            }
        case SET_PRODUCTS:
            return {
                ...state, groceries: [...state.groceries, ...action.groceries]
            }
        case SHOW_DETAILS:
            return stateCopy
        case ADD_TO_CART:
            stateCopy.cart.push(Object.assign(stateCopy.groceries[action.id], {quantity: 1}, {cartId: stateCopy.cart.length}))
            let uniqueCart = new Set(stateCopy.cart)
            stateCopy.cart = [...uniqueCart]
            return stateCopy
        case ADD_ONE:
            return {
                ...state, ...state.cart[action.id].quantity += 1
            }
        case SUBTRACT_ONE:
            return {
                ...state, ...state.cart[action.id].quantity -= 1
            }
        case REMOVE_FROM_CART:
            return {
                ...state, ...state.cart.splice(action.id, 1)
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

export default productsReducer