const SHOW_DETAILS = 'SHOW-DETAILS'
const ADD_TO_CART = 'ADD-TO-CART'
const ADD_MORE = 'ADD-MORE'
const SET_PRODUCTS = 'SET-PRODUCTS'
const CHECKOUT = 'CHECKOUT'

let initialState = {
    groceries: [
    ],
    cart: [

    ]
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
        case ADD_MORE:
            return {
                ...state, ...state.cart[action.id].quantity += 1
            }
        default:
            return stateCopy
    }
}

export let showDetailsActionCreator = (id) => ({ type: SHOW_DETAILS, id: id })
export let addToCartActionCreator = (id) => ({ type: ADD_TO_CART, id: id })
export let addMoreActionCreator = (id) => ({ type: ADD_MORE, id: id })
export let setProductsActionCreator = (groceries) => ({ type: SET_PRODUCTS, groceries: groceries })
export let checkoutActionCreator = () => ({ type: CHECKOUT, })
export default productsReducer