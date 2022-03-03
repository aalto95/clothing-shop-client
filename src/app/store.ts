import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../features/admin-slice";
import loginReducer from "../features/login-slice";
import itemsReducer from "../features/items-slice";
import searchReducer from "../features/search-slice";
import { apiSlice } from "../features/api/items-api-slice";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    login: loginReducer,
    items: itemsReducer,
    search: searchReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
