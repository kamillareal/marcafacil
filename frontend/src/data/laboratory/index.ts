import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { laboratoryInitialState } from "./state";
import { ILaboratory } from "./type";

export const laboratorySlice = createSlice({
  initialState: laboratoryInitialState,
  name: "laboratory",
  reducers: {
    setSelectedLaboratory: (state, action: PayloadAction<string>) => {
      state.laboratorySelected.id = action.payload;
      return state;
    },
    setLaboratoryList: (state, action: PayloadAction<ILaboratory[]>) => {
      state.laboratorylist = action.payload;
    },
  },
});
