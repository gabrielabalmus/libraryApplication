import Paper from "@mui/material/Paper";
import Input from "@/components/Input";
import { useState } from "react";
import { useNavigate, useParams } from "@remix-run/react";
import {
  ErrorState,
  LibrariesFormProps,
  LibraryValue,
  ScheduleTimeValue,
} from "~/types/Libraries.type";
import { checkIfValidDate } from "../Libraries.helper";
import Button from "@/components/Button";
import { ButtonType, ButtonVariant } from "@/components/Button/Button.type";
import { ColumnFlex } from "@/components/Flex";
import TimePicker from "@/components/TimePicker";
import { Dayjs } from "dayjs";
import { Details, ScheduleTitle } from "../Libraries.const";
import {
  StyledFlexButton,
  StyledTitle,
  StyledTypography,
} from "../Libraries.style";
import { AlignedFlex } from "@/components/Flex/Flex";
import Autocomplete from "@/components/Autocomplete";
import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import { StyledColumnFlex, StyleFlex } from "~/components/Books/Books.style";

const LibrariesForm: React.FC<LibrariesFormProps> = ({
  onSubmit,
  setLibrary,
  library,
  cities,
}) => {
  const navigate = useNavigate();
  const urlParams = useParams();

  const [inputErrors, setInputErrors] = useState<ErrorState>({});

  const handleInputChange = (value: string, field: LibraryValue) => {
    setLibrary((oldLibrary) => ({ ...oldLibrary, [field]: value }));

    if (inputErrors[field])
      setInputErrors((oldErrors) => {
        delete oldErrors[field];
        return oldErrors;
      });
  };

  const handleMondayFriday = (
    value: Dayjs | null,
    field: ScheduleTimeValue
  ) => {
    const newTime = checkIfValidDate(value);

    setLibrary((oldLibrary) => ({
      ...oldLibrary,
      schedule: {
        ...oldLibrary.schedule,
        mondayFriday: { ...oldLibrary.schedule.mondayFriday, [field]: newTime },
      },
    }));

    if (
      inputErrors.schedule?.mondayFriday &&
      inputErrors.schedule.mondayFriday[field]
    ) {
      delete inputErrors.schedule.mondayFriday[field];
      setInputErrors(inputErrors);
    }
  };

  const handleSaturday = (value: Dayjs | null, field: ScheduleTimeValue) => {
    const newTime = checkIfValidDate(value);

    setLibrary((oldLibrary) => ({
      ...oldLibrary,
      schedule: {
        ...oldLibrary.schedule,
        saturday: { ...oldLibrary.schedule.saturday, [field]: newTime },
      },
    }));

    if (
      inputErrors.schedule?.saturday &&
      inputErrors.schedule.saturday[field]
    ) {
      delete inputErrors.schedule.saturday[field];
      setInputErrors(inputErrors);
    }
  };

  const handleOnSubmit = () => {
    onSubmit({
      callback: (fieldErrors: ErrorState) => setInputErrors(fieldErrors),
    });
  };

  return (
    <Paper className="overview-paper">
      <StyleFlex>
        <StyledColumnFlex>
          <StyledTitle variant="h3">{Details}</StyledTitle>

          <Input
            label="Name*"
            errorMessage={inputErrors.name}
            value={library.name}
            onChange={(value: string) =>
              handleInputChange(value, LibraryValue.name)
            }
            width="350px"
          />
          <Autocomplete
            label="City*"
            onChange={(value: AutocompleteOptions | null) =>
              handleInputChange(value?.id || "", LibraryValue.city)
            }
            errorMessage={inputErrors.city}
            options={cities}
            value={library.city}
            width="350px"
          />
          <Input
            label="Address*"
            errorMessage={inputErrors.address}
            value={library.address}
            onChange={(value: string) =>
              handleInputChange(value, LibraryValue.address)
            }
            width="350px"
            multiline
          />
          <Input
            label="Phone*"
            errorMessage={inputErrors.phone}
            value={library.phone}
            onChange={(value: string) =>
              handleInputChange(value, LibraryValue.phone)
            }
            width="350px"
          />
        </StyledColumnFlex>

        <StyledColumnFlex>
          <StyledTitle
            variant="h3"
            sx={{
              marginTop: { sm: "30px", md: "0" },
            }}
          >
            {ScheduleTitle}
          </StyledTitle>

          <AlignedFlex>
            <StyledTypography variant="h1">Monday-Friday:</StyledTypography>

            <ColumnFlex gap="20px">
              <TimePicker
                label="From*"
                errorMessage={inputErrors.schedule?.mondayFriday?.from}
                value={library.schedule.mondayFriday.from}
                onChange={(value) =>
                  handleMondayFriday(value, ScheduleTimeValue.from)
                }
              />
              <TimePicker
                label="To*"
                errorMessage={inputErrors.schedule?.mondayFriday?.to}
                value={library.schedule.mondayFriday.to}
                onChange={(value) =>
                  handleMondayFriday(value, ScheduleTimeValue.to)
                }
              />
            </ColumnFlex>
          </AlignedFlex>

          <AlignedFlex>
            <StyledTypography variant="h1">Saturday:</StyledTypography>

            <ColumnFlex gap="20px">
              <TimePicker
                label="From*"
                value={library.schedule.saturday.from}
                errorMessage={inputErrors.schedule?.saturday?.from}
                onChange={(value) =>
                  handleSaturday(value, ScheduleTimeValue.from)
                }
              />
              <TimePicker
                label="To*"
                value={library.schedule.saturday.to}
                errorMessage={inputErrors.schedule?.saturday?.to}
                onChange={(value) =>
                  handleSaturday(value, ScheduleTimeValue.to)
                }
              />
            </ColumnFlex>
          </AlignedFlex>
        </StyledColumnFlex>
      </StyleFlex>

      <StyledFlexButton>
        <Button
          title="Cancel"
          variant={ButtonVariant.outlined}
          onClick={() => navigate("/libraries")}
        />
        <Button
          type={ButtonType.submit}
          title={urlParams.libraryId ? "Update" : "Create"}
          variant={ButtonVariant.contained}
          onClick={handleOnSubmit}
        />
      </StyledFlexButton>
    </Paper>
  );
};

export default LibrariesForm;
