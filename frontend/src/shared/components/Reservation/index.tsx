import { IStore } from "data";
import Scheduler, { Editing, SchedulerTypes } from "devextreme-react/scheduler";
import notify from "devextreme/ui/notify";
import { useSelector } from "react-redux";
import { Fragment } from "react/jsx-runtime";
import * as api from "services/api";
import { ICreateReservationRequest } from "services/interfaces/request/create-reservation.interface";
import DataCell from "./dataCell";
import Utils from "./utils";

const currentDate = new Date();
const views: SchedulerTypes.ViewType[] = ["day", "month"];

export const Reservation = () => {
  const { enrollment } = useSelector((store: IStore) => store.user);
  const { id } = useSelector(
    (store: IStore) => store.laboratory.laboratorySelected
  );
  const { dataSrc } = useSelector((store: IStore) => store.schedule);

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

    if (Utils.isDisableDate(new Date(e.appointmentData.startDate!))) {
      e.cancel = true;
      notify("Não é permitido agendar nos finais de semana.", "error", 2000);
    } else {
      try {
        await api.CreateReservation(reservation);
      } catch (error) {
        console.error(error);
      }
    }
  };

  //this is how we gonna block other users
  const onAppointmentRendered = (e) => {
    if (e.appointmentData.text === "Reservado") {
      e.appointmentElement.style.backgroundColor = "red";
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

  const data = [...dataSrc];

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
        onAppointmentRendered={onAppointmentRendered}
        onAppointmentAdding={onAppointmentAdding}
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
