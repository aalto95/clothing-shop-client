import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../models/types";

interface AdminState {
  items: Array<Item>;
}

const initialState: AdminState = {
  items: [],
};

const adminSlice = createSlice({
  name: "Admin",
  initialState,
  reducers: {
    setAdmin(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setAdmin } = adminSlice.actions;
export default adminSlice.reducer;
