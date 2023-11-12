import { fireEvent, render, screen } from "@testing-library/react";
import Select from ".";
import { SelectContainerProps, SelectOptions } from "./Select.type";
import { useState } from "react";
import "@testing-library/jest-dom";

const mockChange = jest.fn();

const options: SelectOptions[] = [
  {
    value: "option1",
    name: "Option1",
  },
  {
    value: "option2",
    name: "Option2",
  },
  {
    value: "option3",
    name: "Option3",
  },
];
const renderSelect = ({ ...props }: SelectContainerProps) =>
  render(<Select {...props} />);

describe("snapshot tests for Select", () => {
  it("renders correctly", () => {
    const { container } = renderSelect({
      label: "Test1",
      value: "option1",
      onChange: mockChange,
      width: "120px",
      options,
    });

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with error message", () => {
    const { container } = renderSelect({
      label: "Test1",
      value: "option1",
      onChange: mockChange,
      options,
      errorMessage: "Error message",
    });

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with placeholder", () => {
    const { container } = renderSelect({
      label: "Test1",
      value: "option1",
      onChange: mockChange,
      options,
      placeholder: "Select placeholder",
    });

    expect(container).toMatchSnapshot();
  });
});

const SelectState = (
  other: Omit<SelectContainerProps, "onChange" | "options">
) => {
  const [value, setValue] = useState<string>(other.value);

  return (
    <Select {...other} value={value} onChange={setValue} options={options} />
  );
};

const wrapper = (other: Omit<SelectContainerProps, "onChange" | "options">) =>
  render(<SelectState {...other} />);

describe("logic tests for Select", () => {
  it("takes value correctly", () => {
    wrapper({ value: "option1", placeholder: "Test placeholder" });

    const select = screen.getByPlaceholderText("Test placeholder");
    expect(select).toBeInTheDocument();
    expect(select).toHaveValue("option1");

    const value = "option2";
    fireEvent.change(select, {
      target: {
        value,
      },
    });
    expect(select).toHaveValue(value);
  });
});
