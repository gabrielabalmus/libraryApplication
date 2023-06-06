import FormControl from "@mui/material/FormControl";
import { StandardSelect } from "./Select.style";
import { SelectContainerProps } from "./Select.type";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";

const SelectContainer: React.FC<SelectContainerProps> = ({
  label,
  value,
  options,
  errorMessage,
  onChange,
  width = "inherit",
  placeholder = "",
}) => {
  const handleOnChange = (event: any) => {
    onChange(event.target.value);
  };

  return (
    <FormControl variant="standard" error={!!errorMessage}>
      {label && <InputLabel>{label}</InputLabel>}
      <StandardSelect
        value={value}
        width={width}
        onChange={handleOnChange}
        variant="standard"
        placeholder={placeholder}
      >
        {options.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </StandardSelect>
      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};

export default SelectContainer;
