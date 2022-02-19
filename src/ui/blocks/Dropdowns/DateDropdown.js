import React, { forwardRef } from "react";
import { Box, Cell } from "ui/base";
import { ReactComponent as CalendarIcon } from "assets/icons/calendar.svg";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Modal from "simple-react-modal";
import DatePicker from "react-datepicker";
import styled from "styled-components/macro";

const DateDropdown = ({ placeholder, err, selected, onSelect }) => {
  const DropdownButton = forwardRef(({ onClick }, ref) => {
    return (
      <Cell.Child
        endAdornment={<CalendarIcon />}
        onClick={onClick}
        button
        ref={ref}
        firstRow
      >
        {selected ? selected.toLocaleDateString() : placeholder}
      </Cell.Child>
    );
  });
  return (
    <Cell.Container err={err}>
      <DatePicker
        selected={selected}
        onChange={onSelect}
        customInput={<DropdownButton placeholder={placeholder} />}
      />
    </Cell.Container>
  );
};

export default styled(DateDropdown)`
  & > .react-datepicker-wrapper {
    display: inherit;
  }
`;
