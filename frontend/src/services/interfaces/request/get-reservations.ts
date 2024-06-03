export interface IGetUserReservationsRequest {
  enrollment: string;
  laboratoryId: string;
}

export interface IGetUserReservationsResponse {
  init_date: Date;
  end_date: Date;
  subject?: string;
}

export interface IGetUserUnavailabelReservationsResponse {
  startDate: Date;
  endDate: Date;
  text?: string;
}
