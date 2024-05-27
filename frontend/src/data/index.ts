import { configureStore } from "@reduxjs/toolkit";
import { useLocalSession } from "hooks/useLocalSession";
import { laboratorySlice } from "./laboratory";
import { ILaboratoryEntity } from "./laboratory/type";
import { IReservationState } from "./reservation/types";
import { snackbarSlice } from "./snackbar";
import { ISnackbarState } from "./snackbar/types";
import { IUserState, userSlice } from "./user";

export interface IStore {
  user: IUserState;
  snackbar: ISnackbarState;
  reservation: IReservationState;
  laboratory: ILaboratoryEntity;
}
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    snackbar: snackbarSlice.reducer,
    reservation: snackbarSlice.reducer,
    laboratory: laboratorySlice.reducer,
  },
});

store.subscribe(() => {
  useLocalSession.saveStateToSessionStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
