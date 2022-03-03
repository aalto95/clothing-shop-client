import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
  isSearchbarToggled: boolean;
  searchField: string | null;
  isSearching: boolean;
  searchText: string | null;
}

const initialState: SearchState = {
  isSearchbarToggled: false,
  searchField: null,
  isSearching: false,
  searchText: null,
};

const searchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
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
  },
});

export const { searchbarToggled, searchFieldChanged } = searchSlice.actions;
export default searchSlice.reducer;
