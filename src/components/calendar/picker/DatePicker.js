import React from "react";
import { Calendar } from "./Calendar";
import { Dropdown } from "./Dropdown";
import "./style/datepicker.css";

const DatepickerInput = ({ value }) => {
  let formatedValue = null;
  if (value instanceof Date) {
    const year = value.getFullYear();
    const month = value.getMonth() + 1;
    const day = value.getDate();

    formatedValue = `${year}-${month}-${day}`;
  }

  return (
    <div className="datepicker-input">
      <input type="text" value={formatedValue} readOnly />
      <i className="fas fa-calendar"></i>
    </div>
  );
};

export const Datepicker = (props) => {
  const { value, onChange } = props;

  return (
    <div className="datepicker">
      <Dropdown trigger={<DatepickerInput value={value} />}>
        <Calendar onChange={onChange} />
      </Dropdown>
    </div>
  );
};
