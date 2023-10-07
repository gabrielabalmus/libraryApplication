import { ContainedButton, OutlinedButton } from "./Button.style";
import { ButtonVariant, ButtonProps } from "./Button.type";

const ButtonContainer: React.FC<ButtonProps> = ({
  title,
  variant,
  onClick,
  type,
  disabled,
  width,
}) => {
  if (variant === ButtonVariant.contained) {
    return (
      <ContainedButton
        onClick={onClick}
        type={type}
        disabled={disabled}
        style={{ minWidth: width || "120px" }}
      >
        {title}
      </ContainedButton>
    );
  }

  return (
    <OutlinedButton
      onClick={onClick}
      type={type}
      disabled={disabled}
      style={{ minWidth: width || "120px" }}
    >
      {title}
    </OutlinedButton>
  );
};

export default ButtonContainer;
