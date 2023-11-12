import { fireEvent, render, screen } from "@testing-library/react";
import Input from ".";
import { InputProps } from "./Input.type";
import { useState } from "react";
import "@testing-library/jest-dom";

const mockChange = jest.fn();

const renderInput = ({ ...props }: InputProps) => render(<Input {...props} />);

describe("snapshot tests for Input", () => {
  it("renders correctly", () => {
    const { container } = renderInput({
      label: "Test1",
      value: "Test input value",
      onChange: mockChange,
      width: "120px",
      multiline: true,
    });

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with error message", () => {
    const { container } = renderInput({
      label: "Test1",
      value: "Test input value",
      onChange: mockChange,
      errorMessage: "Test error message",
    });

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with placeholder", () => {
    const { container } = renderInput({
      label: "Test1",
      value: "Test input value",
      onChange: mockChange,
      placeholder: "Test placeholder",
    });

    expect(container).toMatchSnapshot();
  });
});

const InputState = (other: Omit<InputProps, "onChange">) => {
  const [value, setValue] = useState<string>(other.value);

  return <Input {...other} value={value} onChange={setValue} />;
};

const wrapper = (other: Omit<InputProps, "onChange">) =>
  render(<InputState {...other} />);

describe("logic tests for Input", () => {
  it("takes value correctly", () => {
    wrapper({ value: "", placeholder: "Test placeholder" });

    const input = screen.getByPlaceholderText("Test placeholder");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");

    const value = "Entered Text";
    fireEvent.change(input, {
      target: {
        value,
      },
    });
    expect(input).toHaveValue(value);
  });

  it("display label correctly", () => {
    wrapper({ label: "Test1", value: "" });

    const inputLabel = screen.getByLabelText("Test1");
    expect(inputLabel).toBeInTheDocument();
  });
});
