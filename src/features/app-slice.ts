import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Item } from "../models/types";
import { productsAPI } from "../api/api";

interface ItemsState {
  items: Array<Item>;
  isFetching: boolean;
  cart: any;
  currentPage: number;
  pageLength: number;
  pagesQuantity: number | null;
  isRedirecting: boolean;
  specificItem: Item | null;
  isSearchbarToggled: boolean;
  searchField: string;
  isSearching: boolean;
  searchText: string;
  user: any;
}

const initialState: ItemsState = {
  items: [],
  isFetching: false,
  cart: [],
  currentPage: 1,
  pageLength: 8,
  pagesQuantity: null,
  isRedirecting: false,
  specificItem: null,
  isSearchbarToggled: false,
  searchField: "",
  isSearching: false,
  searchText: "",
  user: null,
};

const appSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    itemsSet(state, action) {
      state.items = action.payload;
    },
    isRedirectingToggled(state, action) {
      state.isRedirecting = action.payload;
    },
    searchFieldChanged(state, action) {
      state.searchField = action.payload;
    },
    isSearchingToggled(state, action) {
      state.isSearching = action.payload;
    },
    searchbarToggled(state) {
      state.isSearchbarToggled = !state.isSearchbarToggled;
    },
    searchTextSet(state, action) {
      state.searchText = action.payload;
    },
    loggedOut(state) {
      state.user = null;
    },
    checkedOut(state) {
      return {
        ...state,
        cart: [],
        cartSize: 0,
      };
    },
    cartSet(state, action) {
      state.cart = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  itemsSet,
  isRedirectingToggled,
  searchFieldChanged,
  searchbarToggled,
  isSearchingToggled,
  searchTextSet,
  loggedOut,
  checkedOut,
  cartSet,
} = appSlice.actions;
export default appSlice.reducer;
