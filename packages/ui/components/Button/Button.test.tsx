import { render } from "@testing-library/react";
import Button from ".";
import { ButtonProps, ButtonType, ButtonVariant } from "./Button.type";

const mockCLick = jest.fn();

const renderButton = ({ ...props }: ButtonProps) =>
  render(<Button {...props} onClick={mockCLick} />);

describe("snapshot tests for Button", () => {
  it.each([
    ["Test button1", ButtonVariant.contained, ButtonType.button, false, "100px"],
    ["Test button2", ButtonVariant.outlined, ButtonType.submit, true, "150px"],
    ["Test button3", ButtonVariant.outlined, ButtonType.reset, false, "250px"],
  ])("renders correctly", (title, variant, type, disabled, width) => {
    const { container } = renderButton({
      title,
      variant,
      type,
      disabled,
      width,
    });

    expect(container).toMatchSnapshot();
  });
});
