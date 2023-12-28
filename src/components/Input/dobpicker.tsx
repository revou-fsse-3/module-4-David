import { InputHTMLAttributes, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const DateOfBirthPicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

const DOBPicker = (props: InputProps) => {
  return <DateOfBirthPicker {...props} />;
};

export default DOBPicker;
