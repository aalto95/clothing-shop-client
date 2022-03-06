import { productsAPI } from "../api/api";
import { CartItem, Item } from "../models/types";

const SET_PRODUCTS = "SET-PRODUCTS";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const ADD_TO_CART = "ADD-TO-CART";
const CHECKOUT = "CHECKOUT";
const REMOVE_FROM_CART = "REMOVE-FROM-CART";
const ADD_ONE = "ADD-ONE";
const SUBTRACT_ONE = "SUBTRACT-ONE";
const SHOW_PREVIOUS_PAGE = "SHOW-PREVIOUS-PAGE";
const SHOW_NEXT_PAGE = "SHOW-NEXT-PAGE";
const SET_PAGES_QUANTITY = "SET-PAGES-QUANTITY";
const TOGGLE_IS_REDIRECTING = "TOGGLE-IS-REDIRECTING";
const SET_SPECIFIC_ITEM = "SET_SPECIFIC_ITEM";

let initialState = {
  items: [] as Array<Item>,
  isFetching: false as boolean,
  cart: [] as any,
  cartSize: 0 as number,
  currentPage: 1 as number,
  pageLength: 8 as number,
  pagesQuantity: null as number | null,
  isRedirecting: false as boolean,
  specificItem: {},
};

export type InitialStateType = typeof initialState;

const productsReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  let newCartSize;
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        items: action.items,
      };

    case ADD_TO_CART:
      newCartSize = state.cartSize + 1;
      let cartItem = Object.assign(
        state.specificItem,
        { quantity: 1 },
        { cartId: state.cart.length }
      );
      return {
        ...state,
        ...state.cart.push(cartItem),
        cartSize: newCartSize,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case CHECKOUT:
      return {
        ...state,
        cart: [],
        cartSize: 0,
      };

    case ADD_ONE:
      newCartSize = state.cartSize + 1;
      return {
        ...state,
        cart: state.cart.map((item: any, i: number) =>
          i === action.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
        cartSize: newCartSize,
      };

    case SUBTRACT_ONE:
      newCartSize = state.cartSize - 1;
      return {
        ...state,
        cart: state.cart.map((item: any, i: number) =>
          i === action.id ? { ...item, quantity: item.quantity - 1 } : item
        ),
        cartSize: newCartSize,
      };

    case REMOVE_FROM_CART:
      newCartSize = state.cartSize - state.cart[action.id].quantity;
      let removedItem = state.cart.splice(action.id, 1);
      return {
        ...state,
        cart: state.cart.map((item: any) => (item === removedItem ? {} : item)),
        cartSize: newCartSize,
      };

    case SHOW_PREVIOUS_PAGE:
      // @ts-ignore
      if (state.currentPage >= 2 && state.currentPage <= state.pagesQuantity) {
        return {
          ...state,
          currentPage: state.currentPage - 1,
        };
      }
      return state;

    case SHOW_NEXT_PAGE:
      // @ts-ignore
      if (state.currentPage < state.pagesQuantity) {
        return {
          ...state,
          currentPage: state.currentPage + 1,
        };
      }
      return state;

    case SET_PAGES_QUANTITY:
      return {
        ...state,
        pagesQuantity: Math.ceil(action.length / state.pageLength),
      };
    case TOGGLE_IS_REDIRECTING:
      return {
        ...state,
        isRedirecting: action.isRedirecting,
      };
    case SET_SPECIFIC_ITEM:
      return {
        ...state,
        specificItem: action.item,
      };
    default:
      return state;
  }
};

export let setProducts = (items: Array<Item>) => ({
  type: SET_PRODUCTS,
  items,
});
export let toggleIsFetching = (isFetching: boolean) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export let toggleIsRedirecting = (isRedirecting: boolean) => ({
  type: TOGGLE_IS_REDIRECTING,
  isRedirecting,
});
export let addToCart = (id: number) => ({ type: ADD_TO_CART, id });
export let removeFromCart = (id: number) => ({ type: REMOVE_FROM_CART, id });
export let addOne = (id: number) => ({ type: ADD_ONE, id });
export let subtractOne = (id: number) => ({ type: SUBTRACT_ONE, id });
export let checkout = () => ({ type: CHECKOUT });
export let showPreviousPage = () => ({ type: SHOW_PREVIOUS_PAGE });
export let showNextPage = () => ({ type: SHOW_NEXT_PAGE });
export let setPagesQuantity = (length: number) => ({
  type: SET_PAGES_QUANTITY,
  length,
});
export let setSpecificItem = (item: any) => ({ type: SET_SPECIFIC_ITEM, item });

export const getPagesQuantity = (dispatch: any) => {
  productsAPI.getPagesQuantity().then((response) => {
    dispatch(setPagesQuantity(response));
  });
};

export const getProducts =
  (page: number, pageLength: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    let response = await productsAPI.getProducts(page, pageLength);
    dispatch(toggleIsFetching(false));
    dispatch(setProducts(response));
  };

export const getSpecificItem = (id: number) => async (dispatch: any) => {
  dispatch(toggleIsFetching(true));
  let response = await productsAPI.getSpecificItem(id);
  dispatch(setSpecificItem(response));
  dispatch(toggleIsFetching(false));
};

export default productsReducer;
