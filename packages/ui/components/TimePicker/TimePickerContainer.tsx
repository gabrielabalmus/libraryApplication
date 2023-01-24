import { TextFieldProps } from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { StandardTextField } from "./TimePicker.style";
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
        OpenPickerButtonProps={{ disableRipple: true }}
        renderInput={(params: TextFieldProps) => (
          <StandardTextField
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
