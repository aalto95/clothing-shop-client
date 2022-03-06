import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CartItem, Item } from "../models/types";
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
  specificItem: Item | null;
  isSearchbarToggled: boolean;
  searchField: string;
  isSearching: boolean;
  searchText: string;
  login: string;
  password: string;
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
  specificItem: null,
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

export const fetchSpecificItem = createAsyncThunk(
  "items/fetchSpecificItem",
  async (id: number) => {
    const response = await productsAPI.getSpecificItem(id);
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
    addedToCart(state, action) {
      let cartItem = Object.assign(
        state.specificItem,
        { quantity: 1 },
        { cartId: state.cart.length }
      );
      state.cart.push(cartItem);
      state.cartSize += 1;
    },
    addedOne(state, action) {
      let idx = state.cart.findIndex(
        (cartItem: any) => cartItem.cartId === action.payload
      );
      state.cart[idx].quantity += 1;
      state.cartSize += 1;
    },
    subtractedOne(state, action) {
      let idx = state.cart.findIndex(
        (cartItem: any) => cartItem.cartId === action.payload
      );
      state.cart[idx].quantity -= 1;
      state.cartSize -= 1;
    },
    removedFromCart(state, action) {
      state.cartSize -= state.cart[action.payload].quantity;
      let removedItem = state.cart.splice(action.payload, 1);
      state.cart = state.cart.map((item: any) =>
        item === removedItem ? {} : item
      );
    },
    checkedOut(state) {
      return {
        ...state,
        cart: [],
        cartSize: 0,
      };
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
      })
      .addCase(fetchSpecificItem.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchSpecificItem.fulfilled, (state, action) => {
        state.specificItem = action.payload;
        state.isFetching = false;
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
  addedToCart,
  addedOne,
  subtractedOne,
  removedFromCart,
  checkedOut,
} = appSlice.actions;
export default appSlice.reducer;
