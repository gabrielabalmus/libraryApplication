import Button from "@/components/Button";
import { ButtonType, ButtonVariant } from "@/components/Button/Button.type";
import Input from "@/components/Input";
import {
  StyledAlert,
  StyledGrid,
  StyledParagraph,
  StyledTitle,
} from "./Login.style";
import { menuTitle } from "@/components/Menu/Menu.const";
import { useActionData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { ErrorState, LoginFormProps, LoginState, LoginValue } from "./Login.type";
import { InputType } from "@/components/Input/Input.type";

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const actionData = useActionData();

  const [data, setData] = useState<LoginState>({
    email: "",
    password: "",
  });
  const [generalError, setGeneralError] = useState<string>("");
  const [inputErrors, setInputErrors] = useState<ErrorState>({});

  useEffect(() => {
    if (actionData && actionData.message && actionData.success === false)
      setGeneralError(actionData.message);
  }, [actionData]);

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
    onSubmit({ data, callback: (fieldErrors) => setInputErrors(fieldErrors) });
  };

  return (
    <StyledGrid container>
      <StyledTitle variant="h5">{menuTitle}</StyledTitle>

      <StyledParagraph variant="h2">
        Please enter your login data.
      </StyledParagraph>

      <Input
        label="Email*"
        errorMessage={inputErrors.email}
        defaultValue={data.email}
        onChange={(value: string) => handleInputChange(value, LoginValue.email)}
      />
      <Input
        label="Password*"
        type={InputType.password}
        errorMessage={inputErrors.password}
        defaultValue={data.password}
        onChange={(value: string) =>
          handleInputChange(value, LoginValue.password)
        }
      />

      {generalError && (
        <StyledAlert severity="error">{generalError}</StyledAlert>
      )}

      <br />
      <Button
        type={ButtonType.submit}
        title="Login"
        variant={ButtonVariant.contained}
        onClick={handleOnSubmit}
      />
    </StyledGrid>
  );
};

export default LoginForm;
