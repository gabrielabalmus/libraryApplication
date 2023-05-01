import { ContainedButton, OutlinedButton } from "./Button.style";
import { ButtonVariant, ButtonProps } from "./Button.type";

const ButtonContainer: React.FC<ButtonProps> = ({
  title,
  variant,
  onClick,
  type,
  disabled,
}) => {
  if (variant === ButtonVariant.contained) {
    return (
      <ContainedButton onClick={onClick} type={type} disabled={disabled}>
        {title}
      </ContainedButton>
    );
  }

  return (
    <OutlinedButton onClick={onClick} type={type} disabled={disabled}>
      {title}
    </OutlinedButton>
  );
};

export default ButtonContainer;
