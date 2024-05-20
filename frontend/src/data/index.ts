import { configureStore } from "@reduxjs/toolkit";
import { snackbarSlice } from "./snackbar";
import { ISnackbarState } from "./snackbar/types";
import { IUserState, userSlice } from "./user";

export interface IStore {
  user: IUserState;
  snackbar: ISnackbarState;
}
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    snackbar: snackbarSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
