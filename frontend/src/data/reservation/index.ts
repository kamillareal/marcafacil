import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { reservationInitialState } from "./state";

export const reservationSlice = createSlice({
  name: "reservation",
  initialState: reservationInitialState,
  reducers: {
    setInitDate: (state, action: PayloadAction<Date>) => {
      state.init_date = action.payload;
      return state;
    },

    setEndDate: (state, action: PayloadAction<Date>) => {
      state.end_date = action.payload;
      return state;
    },

    setLabId: (state, action: PayloadAction<string>) => {
      state.laboratory_id = action.payload;
      return state;
    },

    setUserId: (state, action: PayloadAction<string>) => {
      state.user_id = action.payload;
      return state;
    },
  },
});
