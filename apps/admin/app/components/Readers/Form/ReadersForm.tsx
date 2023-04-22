import Paper from "@mui/material/Paper";
import Input from "@/components/Input";
import { useState } from "react";
import { useNavigate, useParams } from "@remix-run/react";
import {
  ErrorState,
  ReadersFormProps,
  ReaderValue,
} from "~/types/Readers.type";
import Button from "@/components/Button";
import { ButtonType, ButtonVariant } from "@/components/Button/Button.type";
import { StyledFlexButton } from "~/components/Libraries/Libraries.style";
import Autocomplete from "@/components/Autocomplete";
import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import { StyledColumnFlex, StyleFlex } from "~/components/Books/Books.style";
import { Details } from "../Readers.const";
import { ColumnFlex } from "@/components/Flex";
import Typography from "@mui/material/Typography";

const ReadersForm: React.FC<ReadersFormProps> = ({
  onSubmit,
  setReader,
  reader,
  cities,
}) => {
  const navigate = useNavigate();
  const urlParams = useParams();

  const [inputErrors, setInputErrors] = useState<ErrorState>({});

  const handleInputChange = (value: string, field: ReaderValue) => {
    setReader((oldReader) => ({ ...oldReader, [field]: value }));

    if (inputErrors[field])
      setInputErrors((oldErrors) => {
        delete oldErrors[field];
        return oldErrors;
      });
  };

  const handleOnSubmit = () => {
    onSubmit({
      callback: (fieldErrors: ErrorState) => setInputErrors(fieldErrors),
    });
  };

  return (
    <Paper className="overview-paper">
      <ColumnFlex gap="40px">
        <Typography variant="h3">{Details}</Typography>

        <StyleFlex>
          <StyledColumnFlex>
            <Input
              label="Name*"
              errorMessage={inputErrors.name}
              value={reader.name}
              onChange={(value: string) =>
                handleInputChange(value, ReaderValue.name)
              }
              width="350px"
            />
            <Input
              label="Email*"
              errorMessage={inputErrors.email}
              value={reader.email}
              onChange={(value: string) =>
                handleInputChange(value, ReaderValue.email)
              }
              width="350px"
              multiline
            />
            <Autocomplete
              label="City*"
              onChange={(value: AutocompleteOptions | null) =>
                handleInputChange(value?.id || "", ReaderValue.city)
              }
              errorMessage={inputErrors.city}
              options={cities}
              value={reader.city}
              width="350px"
            />
          </StyledColumnFlex>

          <StyledColumnFlex>
            <Input
              label="Address*"
              errorMessage={inputErrors.address}
              value={reader.address}
              onChange={(value: string) =>
                handleInputChange(value, ReaderValue.address)
              }
              width="350px"
              multiline
            />
            <Input
              label="Phone*"
              errorMessage={inputErrors.phone}
              value={reader.phone}
              onChange={(value: string) =>
                handleInputChange(value, ReaderValue.phone)
              }
              width="350px"
            />
          </StyledColumnFlex>
        </StyleFlex>
      </ColumnFlex>

      <StyledFlexButton>
        <Button
          title="Cancel"
          variant={ButtonVariant.outlined}
          onClick={() => navigate("/readers")}
        />
        <Button
          type={ButtonType.submit}
          title={urlParams.readerId ? "Update" : "Create"}
          variant={ButtonVariant.contained}
          onClick={handleOnSubmit}
        />
      </StyledFlexButton>
    </Paper>
  );
};

export default ReadersForm;
