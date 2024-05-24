import Header from "shared/components/Header";

import { Reservation } from "shared/components/Reservation";
import { ReservationPageBody } from "./styles";

export const ReservationPage = () => {
  return (
    <ReservationPageBody>
      <Header />
      <Reservation />;
    </ReservationPageBody>
  );
};
