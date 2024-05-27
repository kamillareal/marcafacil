import { ILaboratoryEntity } from "./type";

export const laboratoryInitialState: ILaboratoryEntity = {
  laboratorySelected: {
    id: "",
  },
  laboratorylist: [
    {
      id: "",
      name: "",
      capacity: 0,
      unit: "5",
      imageUrl: "",
      description: "",
    },
  ],
};
