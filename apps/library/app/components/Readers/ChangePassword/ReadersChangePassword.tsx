import Paper from "@mui/material/Paper";
import Input from "@/components/Input";
import { useState } from "react";
import {
  PasswordErrorState,
  PasswordFormProps,
  PasswordValue,
} from "~/types/Readers.type";
import Button from "@/components/Button";
import { ButtonType, ButtonVariant } from "@/components/Button/Button.type";
import { StyledColumnFlex } from "~/components/Readers/Readers.style";
import { StyledMainTitle } from "~/components/Contact/Contact.style";
import Flex from "@/components/Flex";
import { StyledAlert } from "~/components/Login/Login.style";
import { InputType } from "@/components/Input/Input.type";

const ReadersChangePassword: React.FC<PasswordFormProps> = ({
  onSubmit,
  data,
  setData,
  messageData,
}) => {
  const [errors, setErrors] = useState<PasswordErrorState>({});

  const handleInputChange = (value: string, field: PasswordValue) => {
    setData((oldData) => ({ ...oldData, [field]: value }));

    if (errors[field])
      setErrors((oldErrors) => {
        delete oldErrors[field];
        return oldErrors;
      });
  };

  const handleOnSubmit = () => {
    onSubmit({
      callback: (fieldErrors: PasswordErrorState) => setErrors(fieldErrors),
    });
  };

  return (
    <Paper className="overview-paper">
      <StyledMainTitle variant="h4" marginBottom="40px">
        Change password
      </StyledMainTitle>

      <StyledColumnFlex>
        <Input
          label="Old password*"
          errorMessage={errors.oldPassword}
          type={InputType.password}
          value={data.oldPassword}
          onChange={(value: string) =>
            handleInputChange(value, PasswordValue.oldPassword)
          }
        />

        <Input
          label="New password*"
          errorMessage={errors.newPassword}
          type={InputType.password}
          value={data.newPassword}
          onChange={(value: string) =>
            handleInputChange(value, PasswordValue.newPassword)
          }
        />

        {messageData?.success === false && (
          <StyledAlert severity="error">{messageData.message}</StyledAlert>
        )}

        {messageData?.success === true && (
          <StyledAlert severity="success">{messageData.message}</StyledAlert>
        )}

        <Flex justifyContent="center" marginTop="10px">
          <Button
            type={ButtonType.submit}
            title="Change"
            variant={ButtonVariant.contained}
            onClick={handleOnSubmit}
          />
        </Flex>
      </StyledColumnFlex>
    </Paper>
  );
};

export default ReadersChangePassword;
