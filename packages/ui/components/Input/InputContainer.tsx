import { InputProps, InputType } from "./Input.type";
import { StandardInput } from "./Input.style";
import { ChangeEvent } from "react";

const InputContainer: React.FC<InputProps> = ({
  label,
  value,
  type = InputType.text,
  errorMessage,
  onChange,
  width = "inherit",
  multiline = false,
  placeholder = "",
}) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <StandardInput
      error={!!errorMessage}
      label={label}
      placeholder={placeholder}
      type={type}
      value={value}
      InputProps={{ inputProps: { min: 0 } }}
      variant="standard"
      helperText={errorMessage}
      onChange={handleOnChange}
      width={width}
      multiline={type !==InputType.number && multiline}
      maxRows={4}
    />
  );
};

export default InputContainer;
