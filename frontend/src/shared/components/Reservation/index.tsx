import { IStore } from "data";
import Scheduler, { Editing, SchedulerTypes } from "devextreme-react/scheduler";
import notify from "devextreme/ui/notify";
import { useSelector } from "react-redux";
import { Fragment } from "react/jsx-runtime";
import * as api from "services/api";
import { ICreateReservationRequest } from "services/interfaces/request/create-reservation.interface";
import { data } from "./data";
import DataCell from "./dataCell";

const currentDate = new Date();
const views: SchedulerTypes.ViewType[] = ["day", "week", "month"];

const resourcesData = [
  {
    text: "Room 101",
    id: 1,
    color: "#bbd806",
  },
  {
    text: "Room 102",
    id: 2,
    color: "#f34c8a",
  },
  {
    text: "Room 103",
    id: 3,
    color: "#ae7fcc",
  },
  {
    text: "Meeting room",
    id: 4,
    color: "#ff8817",
  },
  {
    text: "Conference hall",
    id: 5,
    color: "#03bb92",
  },
];

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
      subject: e.appointmentData.text!,
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

  const onAppointmentFormOpening = (e) => {
    const { form } = e;
    const items = form.option("items");
    items[0].items[0].label.text = "Título";
    items[0].items[4] = { colSpan: 2, itemType: "empty" };
    items[0].items[2] = { colSpan: 2, itemType: "empty" };
    items[0].items[1].items[0].label.text = "Data inicial";
    items[0].items[1].items[2].label.text = "Data final";
    form.option("items", items);
  };

  return (
    <Fragment>
      <Scheduler
        timeZone="America/Manaus"
        dataSource={data}
        views={views}
        onAppointmentFormOpening={onAppointmentFormOpening}
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
      >
        <Editing
          allowAdding={true}
          allowDeleting={true}
          allowResizing={true}
          allowDragging={false}
          allowUpdating={false}
        />
      </Scheduler>
    </Fragment>
  );
};
