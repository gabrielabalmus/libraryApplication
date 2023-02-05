import { InputProps, InputType } from "./Input.type";
import { StandardInput } from "./Input.style";

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
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <StandardInput
      error={!!errorMessage}
      label={label}
      placeholder={placeholder}
      type={type}
      value={value}
      variant="standard"
      helperText={errorMessage}
      onChange={handleOnChange}
      width={width}
      multiline={multiline}
    />
  );
};

export default InputContainer;
