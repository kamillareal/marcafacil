import { ILaboratoryEntity } from "./type";

export const laboratoryInitialState: ILaboratoryEntity = {
  laboratorySelected: {
    id: "",
  },
  laboratorylist: [
    {
      id: "",
      number: "",
      capacity: 0,
      unit: "5",
      imageUrl: "",
      description: "",
    },
  ],
};
