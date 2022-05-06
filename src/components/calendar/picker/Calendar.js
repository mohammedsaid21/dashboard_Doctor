import React, { useState } from "react";
import "./style/datepicker.css";
import { FaAngleLeft } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa'

// Helpers
const getFirstDayOfMonth = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

const getLastDayOfMonth = (date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

const getMonthDays = (date) => {
  const lastDay = getLastDayOfMonth(date);

  return lastDay.getDate();
};

const getDayOfWeek = (date) => {
  const day = date.getDay();

  return day > 0 ? day - 1 : 6;
};

const equalDate = (date1, date2) => {
  const equalYear = date1.getFullYear() === date2.getFullYear();
  const equalMonth = date1.getMonth() === date2.getMonth();
  const equalDay = date1.getDate() === date2.getDate();

  return equalDay && equalMonth && equalYear;
};

// Constants
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Sub Components
const CalendarMonthControl = (props) => {
  const { onPrevMonth, onNextMonth, month } = props;

  return (
    <div className="calendar-month-control">
      <button onClick={onPrevMonth}>
        <FaAngleLeft />
      </button>
      <span className="calendar-month">
        {months[month.getMonth()]} {month.getFullYear()}
      </span>
      <button onClick={onNextMonth}>
        <FaAngleRight />
      </button>
    </div>
  );
};

export const Calendar = (props) => {
  const { currentDate, onChange } = props;

  const [date, setDate] = useState(currentDate || new Date());
  const [month, setMonth] = useState(date);

  const createCalendar = (selectedMonth) => {
    const start = getFirstDayOfMonth(selectedMonth);
    const end = getLastDayOfMonth(selectedMonth);
    const current = start;
    const weeks = Math.ceil(getMonthDays(selectedMonth) / 7);

    const weekRows = [];

    // Create week rows
    for (let y = 0; y < weeks; y++) {
      const dayCols = [];

      // Create day columns
      for (let x = 0; x < 7; x++) {
        if ( (y === 0 && x < getDayOfWeek(start)) || (y === weeks - 1 && x > getDayOfWeek(end)) ) {
          // Empty columns
          dayCols.push(<td></td>);
        } else {
          // Columns with days
          const day = new Date(current.getTime());

          dayCols.push(
            <td
              onClick={() => {
                setDate(day);
                onChange && onChange({ target: { value: day } });
              }}
              data-current={equalDate(current, date)}
            >
              {current.getDate()}
            </td>
          );
          current.setDate(current.getDate() + 1);
        }
      }

      weekRows.push(<tr>{dayCols}</tr>);
    }

    return weekRows;
  };
      //
  const calendar = createCalendar(month);

  const handlePrevMonth = () => {
    const prevMonth = new Date(month.getTime());
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setMonth(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(month.getTime());
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setMonth(nextMonth);
  };

  return (
    <div className="calendar-container">
      <CalendarMonthControl
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
        month={month}
      />
      <table className="calendar">
        <thead>
          <tr>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
            <th>Su</th>
          </tr>
        </thead>
        <tbody>{calendar}</tbody>
      </table>
    </div>
  );
};
