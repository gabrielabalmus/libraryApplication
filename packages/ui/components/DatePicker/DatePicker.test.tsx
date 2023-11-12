import { render } from "@testing-library/react";
import DatePicker from ".";
import { DatePickerProps } from "./DatePicker.type";
import "@testing-library/jest-dom";

const mockChange = jest.fn();

const renderDatePicker = ({ ...props }: DatePickerProps) =>
  render(<DatePicker {...props} />);

describe("snapshot tests for DatePicker", () => {
  it("renders correctly", () => {
    const { container } = renderDatePicker({
      label: "Test1",
      value: "2000",
      views: ["year"],
      onChange: mockChange,
    });

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with error message", () => {
    const { container } = renderDatePicker({
      label: "Test1",
      value: "2000",
      views: ["year"],
      onChange: mockChange,
      errorMessage: "Test error message",
    });

    expect(container).toMatchSnapshot();
  });
});
