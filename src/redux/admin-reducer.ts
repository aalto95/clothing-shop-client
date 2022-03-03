import { productsAPI } from "../api/api";
import { toggleIsFetching } from "./products-reducer";
import { Item } from "../models/types";

const SET_ITEMS = "SET_ITEMS";

let initialState = {
  items: [] as Array<Item>,
};

export type InitialStateType = typeof initialState;

const adminReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.items,
      };
    default:
      return state;
  }
};

type SetItemsActionType = {
  type: typeof SET_ITEMS;
  items: Array<Item>;
};

export let setItems = (items: Array<Item>): SetItemsActionType => ({
  type: SET_ITEMS,
  items,
});

export let fetchAllItems = () => async (dispatch: any) => {
  dispatch(toggleIsFetching(true));
  let response = await productsAPI.getProducts();
  dispatch(setItems(response));
  dispatch(toggleIsFetching(false));
};

export default adminReducer;
