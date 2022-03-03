import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
  login: string | null;
  password: string | null;
  isLogged: boolean;
  isAdmin: boolean;
}

const initialState: LoginState = {
  login: "",
  password: "",
  isLogged: false,
  isAdmin: false,
};

const loginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    loggedOut(state) {
      state.isLogged = false;
      state.isAdmin = false;
    },
  },
});

export const { loggedOut } = loginSlice.actions;
export default loginSlice.reducer;
