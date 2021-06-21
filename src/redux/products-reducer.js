const SET_PRODUCTS = 'SET-PRODUCTS'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const ADD_TO_CART = 'ADD-TO-CART'
const CHECKOUT = 'CHECKOUT'
const REMOVE_FROM_CART = 'REMOVE-FROM-CART'
const ADD_ONE = 'ADD-ONE'
const SUBTRACT_ONE = 'SUBTRACT-ONE'
const SHOW_PREVIOUS_PAGE = 'SHOW-PREVIOUS-PAGE'
const SHOW_NEXT_PAGE = 'SHOW-NEXT-PAGE'
const SET_PAGES_QUANTITY = 'SET-PAGES-QUANTITY'
const TOGGLE_SEARCHBAR = 'TOGGLE-SEARCHBAR'

let initialState = {
    groceries: [],
    isFetching: false,
    cart: [],
    cartSize: 0,
    currentPage: 1,
    pageLength: 8,
    pagesQuantity: null,
    isSearchbarToggled: false
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

        case SHOW_PREVIOUS_PAGE:
            if (state.currentPage >= 2 && state.currentPage <= state.pagesQuantity) {
                return {
                    ...state,
                    currentPage: state.currentPage - 1
                }
            }
            return state

        case SHOW_NEXT_PAGE:
            if (state.currentPage < state.pagesQuantity) {
                return {
                    ...state,
                    currentPage: state.currentPage + 1
                }
            }
            return state

        case SET_PAGES_QUANTITY:
            return {
                ...state,
                pagesQuantity: Math.ceil(action.length / state.pageLength)
            }

        case TOGGLE_SEARCHBAR:
            return {
                ...state,
                isSearchbarToggled: !state.isSearchbarToggled
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
export let checkout = () => ({ type: CHECKOUT })
export let removeFromCart = (id) => ({ type: REMOVE_FROM_CART, id })
export let showPreviousPage = () => ({ type: SHOW_PREVIOUS_PAGE })
export let showNextPage = () => ({ type: SHOW_NEXT_PAGE })
export let setPagesQuantity = (length) => ({ type: SET_PAGES_QUANTITY, length })
export let toggleSearchbar = () => ({ type: TOGGLE_SEARCHBAR })

export default productsReducer