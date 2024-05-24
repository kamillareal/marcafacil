import { configureStore } from "@reduxjs/toolkit";
import { IReservationState } from "./reservation/types";
import { snackbarSlice } from "./snackbar";
import { ISnackbarState } from "./snackbar/types";
import { IUserState, userSlice } from "./user";

export interface IStore {
  user: IUserState;
  snackbar: ISnackbarState;
  reservation: IReservationState;
}
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    snackbar: snackbarSlice.reducer,
    reservation: snackbarSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
