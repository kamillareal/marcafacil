export interface ILaboratoryEntity {
  laboratorySelected: {
    id: string;
  };
  laboratorylist: ILaboratory[];
}

export interface ILaboratory {
  id: string;
  number: string;
  capacity: number;
  unit: string;
  imageUrl: string;
  description: string;
}
