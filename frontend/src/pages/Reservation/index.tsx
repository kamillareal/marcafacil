import { IStore } from "data";
import { setDataSrc } from "data/schedule/actions";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { getUserReservationsByRange } from "services/api";
import Header from "shared/components/Header";

import { Reservation } from "shared/components/Reservation";
import { ReservationPageBody } from "./styles";

export const ReservationPage = () => {
  const { currentView } = useSelector((store: IStore) => store.schedule);
  const { enrollment } = useSelector((store: IStore) => store.user);
  const { laboratorySelected } = useSelector(
    (store: IStore) => store.laboratory
  );

  const getUserReservationsByCurrentMonth = useCallback(async () => {
    try {
      const response = await getUserReservationsByRange({
        enrollment,
        laboratoryId: laboratorySelected.id,
      });
      const dataSrcFormated = response.data.map((element) => {
        return {
          text: element.subject,
          startDate: element.init_date,
          endDate: element.end_date,
        };
      });
      setDataSrc(dataSrcFormated);
    } catch (error) {
      console.error(error);
    }
  }, [currentView]);
  useEffect(() => {
    getUserReservationsByCurrentMonth();
  }, [currentView]);
  return (
    <ReservationPageBody>
      <Header />
      <Reservation />;
    </ReservationPageBody>
  );
};
