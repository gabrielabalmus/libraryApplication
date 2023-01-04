import { ContainedButton, OutlinedButton } from "./Button.style";
import { ButtonVariant, ButtonProps } from "./Button.type";

const ButtonContainer: React.FC<ButtonProps> = ({
  title,
  variant,
  handleClick,
}) => {
  if (variant === ButtonVariant.contained) {
    return (
      <ContainedButton disableRipple={true} onClick={handleClick}>
        {title}
      </ContainedButton>
    );
  }

  return (
    <OutlinedButton disableRipple={true} onClick={handleClick}>
      {title}
    </OutlinedButton>
  );
};

export default ButtonContainer;
