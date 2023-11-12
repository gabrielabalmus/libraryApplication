import { fireEvent, render, screen } from "@testing-library/react";
import Autocomplete from ".";
import {
  AutocompleteContainerProps,
  AutocompleteOptions,
} from "./Autocomplete.type";
import { useState } from "react";
import "@testing-library/jest-dom";

const mockChange = jest.fn();

const options: AutocompleteOptions[] = [
  {
    id: "option1",
    name: "Option1",
  },
  {
    id: "option2",
    name: "Option2",
  },
  {
    id: "option3",
    name: "Option3",
  },
];
const renderAutocomplete = ({ ...props }: AutocompleteContainerProps) =>
  render(<Autocomplete {...props} />);

describe("snapshot tests for Autocomplete", () => {
  it("renders correctly", () => {
    const { container } = renderAutocomplete({
      label: "Test1",
      value: "option1",
      onChange: mockChange,
      width: "120px",
      options,
    });

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with error message", () => {
    const { container } = renderAutocomplete({
      label: "Test1",
      value: "option1",
      onChange: mockChange,
      options,
      errorMessage: "Error message",
    });

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with placeholder", () => {
    const { container } = renderAutocomplete({
      label: "Test1",
      value: "option1",
      onChange: mockChange,
      options,
      placeholder: "Autocomplete placeholder",
    });

    expect(container).toMatchSnapshot();
  });
});

const AutocompleteState = (
  other: Omit<AutocompleteContainerProps, "onChange" | "options">
) => {
  const [value, setValue] = useState<string>(other.value);

  return (
    <Autocomplete
      {...other}
      value={value}
      onChange={(data: AutocompleteOptions | null) => setValue(data?.id || "")}
      options={options}
    />
  );
};

const wrapper = (
  other: Omit<AutocompleteContainerProps, "onChange" | "options">
) => render(<AutocompleteState {...other} />);

describe("logic tests for Autocomplete", () => {
  it("takes value correctly", async () => {
    wrapper({ value: "option1", placeholder: "Test placeholder" });

    const autocomplete = screen.getByPlaceholderText("Test placeholder");
    expect(autocomplete).toBeInTheDocument();
    expect(autocomplete).toHaveValue("Option1");

    fireEvent.click(autocomplete);

    const value = "Option";
    fireEvent.change(autocomplete, {
      target: {
        value,
      },
    });

    const optionSelected = screen.getByText(options[1].name);

    fireEvent.click(optionSelected);
    fireEvent.click(document.body);

    expect(autocomplete).toHaveValue(options[1].name);
  });
});
