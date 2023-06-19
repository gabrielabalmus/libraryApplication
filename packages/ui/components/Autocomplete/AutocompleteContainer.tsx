import TextField from "@mui/material/TextField";
import { StandardAutocomplete } from "./Autocomplete.style";
import { AutocompleteContainerProps } from "./Autocomplete.type";

const AutocompleteContainer: React.FC<AutocompleteContainerProps> = ({
  label,
  value,
  options,
  errorMessage,
  onChange,
  width = "inherit",
  placeholder = "",
  disabled = false,
}) => {
  const handleOnChange = (event: any, value: any) => {
    onChange(value);
  };

  const selectedValue =
    (value && options.find((item) => item.id === value)) || null;

  return (
    <StandardAutocomplete
      disablePortal
      width={width}
      options={options}
      getOptionLabel={(option: any) => option.name}
      value={selectedValue}
      onChange={handleOnChange}
      disabled={disabled}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          variant="standard"
          error={!!errorMessage}
          helperText={errorMessage}
        />
      )}
    />
  );
};

export default AutocompleteContainer;
