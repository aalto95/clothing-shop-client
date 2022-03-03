import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../models/types";

interface ItemsState {
  items: Array<Item>;
  isFetching: boolean;
  cart: any;
  cartSize: number;
  currentPage: number;
  pageLength: number;
  pagesQuantity: number | null;
  isRedirecting: boolean;
  specificItem: {};
}

const initialState: ItemsState = {
  items: [],
  isFetching: false,
  cart: [],
  cartSize: 0,
  currentPage: 1,
  pageLength: 8,
  pagesQuantity: null,
  isRedirecting: false,
  specificItem: {},
};

const itemsSlice = createSlice({
  name: "Items",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    isRedirectingToggled(state, action) {
      state.isRedirecting = action.payload;
    },
  },
});

export const { setItems, isRedirectingToggled } = itemsSlice.actions;
export default itemsSlice.reducer;
