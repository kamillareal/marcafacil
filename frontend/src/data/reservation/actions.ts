import { store } from "data";
import { reservationSlice } from ".";

export const setInitDate = (payload: Date) => {
  store.dispatch(reservationSlice.actions.setInitDate(payload));
};

export const setEndDate = (payload: Date) => {
  store.dispatch(reservationSlice.actions.setEndDate(payload));
};

export const setLabId = (payload: string) => {
  store.dispatch(reservationSlice.actions.setLabId(payload));
};

export const setUserId = (payload: string) => {
  store.dispatch(reservationSlice.actions.setUserId(payload));
};
