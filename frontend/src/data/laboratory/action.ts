import { store } from "data";
import { laboratorySlice } from ".";

export const setSelectedLaboratory = (id: string) => {
  console.log(id);
  store.dispatch(laboratorySlice.actions.setSelectedLaboratory(id));
};
