import { useEffect, useRef } from "react";
import { InputProps, InputType } from "./Input.type";
import { StandardInput } from "./Input.style";

const InputContainer: React.FC<InputProps> = ({
  label,
  defaultValue,
  type = InputType.text,
  errorMessage,
  onChange,
  width = "inherit",
  multiline = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (defaultValue && inputRef.current) inputRef.current.value = defaultValue;
  }, []);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <StandardInput
      error={!!errorMessage}
      label={label}
      inputRef={inputRef}
      type={type}
      variant="standard"
      helperText={errorMessage}
      onChange={handleOnChange}
      width={width}
      multiline={multiline}
      rows={multiline ? 3 : undefined}
    />
  );
};

export default InputContainer;
