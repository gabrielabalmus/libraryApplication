import { ContainedButton, OutlinedButton } from "./Button.style";
import { ButtonVariant, ButtonProps } from "./Button.type";

const ButtonContainer: React.FC<ButtonProps> = ({
  title,
  variant,
  onClick,
  type,
}) => {
  if (variant === ButtonVariant.contained) {
    return (
      <ContainedButton onClick={onClick} type={type}>
        {title}
      </ContainedButton>
    );
  }

  return (
    <OutlinedButton onClick={onClick} type={type}>
      {title}
    </OutlinedButton>
  );
};

export default ButtonContainer;
