export interface ICreateReservationRequest {
  init_date: string;
  end_date: string;
  laboratory_id: string;
  user_id: string;
  subject?: string;
}

export interface ICreateReservationResponse {
  reservationId: string;
}
