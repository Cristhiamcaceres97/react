import React, { useEffect, useState } from "react";

const CalendarComponents = ({ targetDate }) => {
  const [daysRemaining, setDaysRemaining] = useState(0);
  useEffect(() => {
    const calculateDaysRemaining = () => {
      const currentDate = new Date();
      const differenceInTime = targetDate.getTime() - currentDate.getTime();
      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
      setDaysRemaining(differenceInDays);
    };
    calculateDaysRemaining();
  }, [targetDate]);
  return (
    <p>
      {"Faltan " +
        daysRemaining +
        " días para la fecha " +
        targetDate.toLocaleDateString()}
    </p>
  );
};

export default CalendarComponents;
