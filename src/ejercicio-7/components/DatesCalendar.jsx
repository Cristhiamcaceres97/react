import React from "react";
import CalendarComponents from "./CalendarComponents";

const DatesCalendar = () => {
  const targetDate = new Date("2023-06-31");
  return (
    <div>
      <h1>Dias Restantes</h1>
      <CalendarComponents targetDate={targetDate} />
    </div>
  );
};

export default DatesCalendar;
