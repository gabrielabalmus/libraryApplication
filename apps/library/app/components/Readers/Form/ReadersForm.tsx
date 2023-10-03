import Paper from "@mui/material/Paper";
import Input from "@/components/Input";
import { useState } from "react";
import {
  ErrorState,
  ReadersFormProps,
  ReaderValue,
} from "~/types/Readers.type";
import Button from "@/components/Button";
import { ButtonType, ButtonVariant } from "@/components/Button/Button.type";
import DatePicker from "@/components/DatePicker";
import Autocomplete from "@/components/Autocomplete";
import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import { StyledColumnFlex } from "~/components/Readers/Readers.style";
import { Dayjs } from "dayjs";
import { transformDate } from "@/utils/common";
import { StyledMainTitle } from "~/components/Contact/Contact.style";
import Flex from "@/components/Flex";
import { StyledAlert } from "~/components/Login/Login.style";
import { InputType } from "@/components/Input/Input.type";

const ReadersForm: React.FC<ReadersFormProps> = ({
  onSubmit,
  setReader,
  reader,
  cities,
  messageData,
  readerId,
}) => {
  const [errors, setErrors] = useState<ErrorState>({});

  const handleInputChange = (value: string, field: ReaderValue) => {
    setReader((oldReader) => ({ ...oldReader, [field]: value }));

    if (errors[field])
      setErrors((oldErrors) => {
        delete oldErrors[field];
        return oldErrors;
      });
  };

  const handleBirthdate = (value: Dayjs | null, field: ReaderValue) => {
    const newTime = transformDate(value);

    setReader((oldReader) => ({ ...oldReader, [field]: newTime }));

    if (errors[field])
      setErrors((oldErrors) => {
        delete oldErrors[field];
        return oldErrors;
      });
  };

  const handleOnSubmit = () => {
    onSubmit({
      callback: (fieldErrors: ErrorState) => setErrors(fieldErrors),
    });
  };

  return (
    <Paper className="overview-paper">
      <StyledMainTitle variant="h4" marginBottom="40px">
        {readerId ? "Reader account" : "Reader sign up"}
      </StyledMainTitle>

      <StyledColumnFlex>
        <Input
          label="Name*"
          errorMessage={errors.name}
          value={reader.name}
          onChange={(value: string) =>
            handleInputChange(value, ReaderValue.name)
          }
        />
        <Input
          label="Email*"
          errorMessage={errors.email}
          value={reader.email}
          onChange={(value: string) =>
            handleInputChange(value, ReaderValue.email)
          }
        />
        {!readerId && (
          <Input
            label="Password*"
            errorMessage={errors.password}
            type={InputType.password}
            value={reader.password || ""}
            onChange={(value: string) =>
              handleInputChange(value, ReaderValue.password)
            }
          />
        )}
        <Autocomplete
          label="City*"
          onChange={(value: AutocompleteOptions | null) =>
            handleInputChange(value?.id || "", ReaderValue.city)
          }
          errorMessage={errors.city}
          options={cities}
          value={reader.city}
        />

        <Input
          label="Address*"
          errorMessage={errors.address}
          value={reader.address}
          onChange={(value: string) =>
            handleInputChange(value, ReaderValue.address)
          }
          multiline
        />
        <Input
          label="Phone*"
          errorMessage={errors.phone}
          value={reader.phone}
          onChange={(value: string) =>
            handleInputChange(value, ReaderValue.phone)
          }
        />

        <DatePicker
          label="Birthdate*"
          value={reader.birthdate}
          errorMessage={errors.birthdate}
          onChange={(value) => handleBirthdate(value, ReaderValue.birthdate)}
        />

        {messageData?.success === false && (
          <StyledAlert severity="error">{messageData.message}</StyledAlert>
        )}

        {messageData?.success === true && (
          <StyledAlert severity="success">
            {messageData.message}.{" "}
            {!readerId && <a href="/login">Press here to login.</a>}
          </StyledAlert>
        )}

        <Flex justifyContent="center" marginTop="10px">
          <Button
            type={ButtonType.submit}
            title={readerId ? "Update" : "Create"}
            variant={ButtonVariant.contained}
            onClick={handleOnSubmit}
          />
        </Flex>
      </StyledColumnFlex>
    </Paper>
  );
};

export default ReadersForm;
