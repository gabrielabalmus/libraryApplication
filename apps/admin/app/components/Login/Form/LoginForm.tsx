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

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  data,
  setData,
  generalError,
  setGeneralError,
}) => {
  const [inputErrors, setInputErrors] = useState<ErrorState>({});

  const handleInputChange = (value: string, field: LoginValue) => {
    setData((oldData) => ({ ...oldData, [field]: value }));

    if (inputErrors[field])
      setInputErrors((oldErrors) => {
        delete oldErrors[field];
        return oldErrors;
      });

    if (generalError) setGeneralError("");
  };

  const handleOnSubmit = () => {
    onSubmit({ callback: (fieldErrors) => setInputErrors(fieldErrors) });
  };

  return (
    <StyledPaper>
      <ColumnFlex gap="30px">
        <ColumnFlex gap="10px">
          <Typography variant="h5">{menuTitle}</Typography>

          <StyledParagraph variant="h2">
            Please enter your login data.
          </StyledParagraph>
        </ColumnFlex>
        <ColumnFlex gap="20px">
          <Input
            label="Email*"
            errorMessage={inputErrors.email}
            value={data.email}
            onChange={(value: string) =>
              handleInputChange(value, LoginValue.email)
            }
          />
          <Input
            label="Password*"
            type={InputType.password}
            errorMessage={inputErrors.password}
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
