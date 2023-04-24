import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePickerProps } from "./DatePicker.type";
import TextField, { TextFieldProps } from "@mui/material/TextField";

const DatePickerContainer: React.FC<DatePickerProps> = ({
  label,
  value,
  errorMessage,
  onChange,
}) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      label={label}
      value={value}
      onChange={onChange}
      renderInput={(params: TextFieldProps) => (
        <TextField
          {...params}
          error={!!errorMessage}
          variant="standard"
          helperText={errorMessage}
        />
      )}
    />
  </LocalizationProvider>
);

export default DatePickerContainer;
