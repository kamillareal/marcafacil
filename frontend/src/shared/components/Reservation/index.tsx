import Scheduler, { SchedulerTypes } from "devextreme-react/scheduler";
import { data } from "./data";

const currentDate = new Date();
const views: SchedulerTypes.ViewType[] = ["day", "week", "month"];

export const Reservation = () => (
  <Scheduler
    timeZone="America/Sao_Paulo"
    dataSource={data}
    views={views}
    defaultCurrentView="day"
    defaultCurrentDate={currentDate}
    height={"100%"}
    startDayHour={8}
  />
);
