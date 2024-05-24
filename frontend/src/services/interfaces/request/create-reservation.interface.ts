export interface ICreateReservationRequest {
  init_date: Date;
  end_date: Date;
  laboratory_id: string;
  user_id: string;
}

export interface ICreateReservationResponse {
  reservationId: string;
}
