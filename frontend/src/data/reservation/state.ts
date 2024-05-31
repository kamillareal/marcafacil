import { IReservationState } from "./types";

export const reservationInitialState: IReservationState = {
  init_date: new Date(),
  end_date: new Date(),
  laboratory_id: "",
  user_id: "",
  subject: "",
};
