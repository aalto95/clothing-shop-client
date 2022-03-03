import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Item } from "../models/types";
import { productsAPI } from "../api/api";
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
  isSearchbarToggled: boolean;
  searchField: string;
  isSearching: boolean;
  searchText: string;
  login: string | null;
  password: string | null;
  isLogged: boolean;
  isAdmin: boolean;
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
  isSearchbarToggled: false,
  searchField: "",
  isSearching: false,
  searchText: "",
  login: "",
  password: "",
  isLogged: false,
  isAdmin: false,
};

export const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async (searchString: string) => {
    const response = await productsAPI.searchProducts(searchString, 1, 50);
    return response;
  }
);

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
      state.isLogged = false;
      state.isAdmin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.isSearching = true;
        state.isRedirecting = false;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isSearching = false;
        state.searchText = state.searchField;
        state.searchField = "";
      });
  },
});

export const {
  itemsSet,
  isRedirectingToggled,
  searchFieldChanged,
  searchbarToggled,
  isSearchingToggled,
  searchTextSet,
  loggedOut,
} = appSlice.actions;
export default appSlice.reducer;
