import Button from "@/components/Button";
import { ButtonType, ButtonVariant } from "@/components/Button/Button.type";
import Input from "@/components/Input";
import { StyledAlert, StyledPaper, StyledParagraph } from "../Login.style";
import { menuTitle } from "@/components/Menu/Menu.const";
import { useState } from "react";
import { ErrorState, LoginFormProps, LoginValue } from "~/types/Login.type";
import { InputType } from "@/components/Input/Input.type";
import { ColumnFlex } from "@/components/Flex";
import Typography from "@mui/material/Typography";
import { LoginDescription } from "../Login.const";

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  data,
  setData,
  generalError,
  setGeneralError,
}) => {
  const [errors, setErrors] = useState<ErrorState>({});

  const handleInputChange = (value: string, field: LoginValue) => {
    setData((oldData) => ({ ...oldData, [field]: value }));

    if (errors[field])
      setErrors((oldErrors) => {
        delete oldErrors[field];
        return oldErrors;
      });

    if (generalError) setGeneralError("");
  };

  const handleOnSubmit = () => {
    onSubmit({ callback: (fieldErrors) => setErrors(fieldErrors) });
  };

  return (
    <StyledPaper>
      <ColumnFlex gap="30px">
        <ColumnFlex gap="10px">
          <Typography variant="h5">{menuTitle}</Typography>

          <StyledParagraph variant="h2">{LoginDescription}</StyledParagraph>
        </ColumnFlex>
        <ColumnFlex gap="20px">
          <Input
            label="Email*"
            errorMessage={errors.email}
            value={data.email}
            onChange={(value: string) =>
              handleInputChange(value, LoginValue.email)
            }
          />
          <Input
            label="Password*"
            type={InputType.password}
            errorMessage={errors.password}
            value={data.password}
            onChange={(value: string) =>
              handleInputChange(value, LoginValue.password)
            }
          />

          {generalError && (
            <StyledAlert severity="error">{generalError}</StyledAlert>
          )}
        </ColumnFlex>

        <Button
          type={ButtonType.submit}
          title="Login"
          variant={ButtonVariant.contained}
          onClick={handleOnSubmit}
        />
      </ColumnFlex>
    </StyledPaper>
  );
};

export default LoginForm;
