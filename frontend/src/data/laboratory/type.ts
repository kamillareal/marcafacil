export interface ILaboratoryEntity {
  laboratorySelected: {
    id: string;
  };
  laboratorylist: ILaboratory[];
}

export interface ILaboratory {
  id: string;
  name: string;
  capacity: number;
  unit: string;
  imageUrl: string;
  description: string;
}
