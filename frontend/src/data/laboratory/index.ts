import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { laboratoryInitialState } from "./state";

export const laboratorySlice = createSlice({
  initialState: laboratoryInitialState,
  name: "laboratory",
  reducers: {
    setSelectedLaboratory: (state, action: PayloadAction<string>) => {
      state.laboratorySelected.id = action.payload;
      return state;
    },
  },
});
