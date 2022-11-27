import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/app-slice";
import sidebarReducer from "../features/sidebar-slice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    sidebar: sidebarReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
