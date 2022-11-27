import { createSlice } from "@reduxjs/toolkit";

interface ItemsState {
  isSidebarToggled: boolean;
}

const initialState: ItemsState = {
  isSidebarToggled: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    sidebarToggled(state) {
      state.isSidebarToggled = !state.isSidebarToggled;
    },
  },
});

export const { sidebarToggled } = sidebarSlice.actions;
export default sidebarSlice.reducer;
