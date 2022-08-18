import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const MyDateTimePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      timeInputLabel="Time:"
      dateFormat="MM/dd/yyyy h:mm aa"
      showTimeInput
    />
  );
};

const MyDateTimePicker2 = () => {

  const handleDateChange = () => {

  }

  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={Date.now()}
      onChange={handleDateChange}
      showTimeSelect
      dateFormat="Pp"
    />
  );

}

export default MyDateTimePicker;