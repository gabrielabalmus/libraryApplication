import { render } from "@testing-library/react";
import TimePicker from ".";
import { TimeProps } from "./TimePicker.type";
import "@testing-library/jest-dom";

const mockChange = jest.fn();

const renderTimePicker = ({ ...props }: TimeProps) =>
  render(<TimePicker {...props} />);

describe("snapshot tests for TimePicker", () => {
  it("renders correctly", () => {
    const { container } = renderTimePicker({
      label: "Test1",
      value: "2023-05-01T01:03:00+03:00",
      onChange: mockChange,
    });

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with error message", () => {
    const { container } = renderTimePicker({
      label: "Test1",
      value: "2023-05-01T01:03:00+03:00",
      onChange: mockChange,
      errorMessage: "Test error message",
    });

    expect(container).toMatchSnapshot();
  });
});
