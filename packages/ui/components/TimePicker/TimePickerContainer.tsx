import TextField, { TextFieldProps } from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { TimeProps } from "./TimePicker.type";

const TimePickerContainer: React.FC<TimeProps> = ({
  label,
  value,
  errorMessage,
  onChange,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
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
};

export default TimePickerContainer;
