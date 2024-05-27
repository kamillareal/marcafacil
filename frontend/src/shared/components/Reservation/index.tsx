import { IStore } from "data";
import Scheduler, { SchedulerTypes } from "devextreme-react/scheduler";
import notify from "devextreme/ui/notify";
import { useSelector } from "react-redux";
import * as api from "services/api";
import { ICreateReservationRequest } from "services/interfaces/request/create-reservation.interface";
import { data } from "./data";
import DataCell from "./dataCell";

const currentDate = new Date();
const views: SchedulerTypes.ViewType[] = ["day", "week", "month"];

export const Reservation = () => {
  const { enrollment } = useSelector((store: IStore) => store.user);
  const { id } = useSelector(
    (store: IStore) => store.laboratory.laboratorySelected
  );

  const onAppointmentAdding = async (
    e: SchedulerTypes.AppointmentAddingEvent
  ) => {
    const initDate = new Date(e.appointmentData.startDate!).toISOString();
    const endDate = new Date(e.appointmentData.endDate!).toISOString();

    const reservation: ICreateReservationRequest = {
      user_id: enrollment,
      laboratory_id: id,
      init_date: initDate,
      end_date: endDate,
    };
    const dayOfWeek = new Date(e.appointmentData.startDate!).getDay();

    if (dayOfWeek === 0 || dayOfWeek === 6) {
      e.cancel = true;
      notify("Não é permitido agendar nos finais de semana.", "error", 2000);
    } else {
      await api.CreateReservation(reservation);
    }
  };

  const onAppointmentUpdating = (e) => {
    const dayOfWeek = e.newData.startDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      e.cancel = true;
      notify(
        "Não é permitido mover compromissos para os finais de semana.",
        "error",
        2000
      );
    }
  };

  return (
    <Scheduler
      timeZone="America/Manaus"
      dataSource={data}
      views={views}
      defaultCurrentView="day"
      defaultCurrentDate={currentDate}
      height={"100%"}
      startDayHour={8}
      min={currentDate}
      endDayHour={22}
      cellDuration={60}
      showAllDayPanel={false}
      dataCellComponent={DataCell}
      onAppointmentAdding={onAppointmentAdding}
      onAppointmentUpdating={onAppointmentUpdating}
    />
  );
};
