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
import { transformDate } from "@/utils/common";
import Button from "@/components/Button";
import { ButtonType, ButtonVariant } from "@/components/Button/Button.type";
import { ColumnFlex } from "@/components/Flex";
import TimePicker from "@/components/TimePicker";
import { Dayjs } from "dayjs";
import { Details, ScheduleTitle } from "../Libraries.const";
import {
  StyledColumnFlex,
  StyledFlexButton,
  StyledTypography,
} from "../Libraries.style";
import { AlignedFlex } from "@/components/Flex/Flex";
import Autocomplete from "@/components/Autocomplete";
import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import { StyleFlex } from "~/components/Books/Books.style";
import Typography from "@mui/material/Typography";

const LibrariesForm: React.FC<LibrariesFormProps> = ({
  onSubmit,
  setLibrary,
  library,
  cities,
}) => {
  const navigate = useNavigate();
  const urlParams = useParams();

  const [errors, setErrors] = useState<ErrorState>({});

  const handleInputChange = (value: string, field: LibraryValue) => {
    setLibrary((oldLibrary) => ({ ...oldLibrary, [field]: value }));

    if (errors[field])
      setErrors((oldErrors) => {
        delete oldErrors[field];
        return oldErrors;
      });
  };

  const handleMondayFriday = (
    value: Dayjs | null,
    field: ScheduleTimeValue
  ) => {
    const newTime = transformDate(value);

    setLibrary((oldLibrary) => ({
      ...oldLibrary,
      schedule: {
        ...oldLibrary.schedule,
        mondayFriday: { ...oldLibrary.schedule.mondayFriday, [field]: newTime },
      },
    }));

    if (errors.schedule?.mondayFriday && errors.schedule.mondayFriday[field]) {
      delete errors.schedule.mondayFriday[field];
      setErrors(errors);
    }
  };

  const handleSaturday = (value: Dayjs | null, field: ScheduleTimeValue) => {
    const newTime = transformDate(value);

    setLibrary((oldLibrary) => ({
      ...oldLibrary,
      schedule: {
        ...oldLibrary.schedule,
        saturday: { ...oldLibrary.schedule.saturday, [field]: newTime },
      },
    }));

    if (errors.schedule?.saturday && errors.schedule.saturday[field]) {
      delete errors.schedule.saturday[field];
      setErrors(errors);
    }
  };

  const handleOnSubmit = () => {
    onSubmit({
      callback: (fieldErrors: ErrorState) => setErrors(fieldErrors),
    });
  };

  return (
    <Paper className="overview-paper">
      <StyleFlex>
        <StyledColumnFlex>
          <Typography variant="h3">{Details}</Typography>
          <ColumnFlex gap="20px">
            <Input
              label="Name*"
              errorMessage={errors.name}
              value={library.name}
              onChange={(value: string) =>
                handleInputChange(value, LibraryValue.name)
              }
            />
            <Autocomplete
              label="City*"
              onChange={(value: AutocompleteOptions | null) =>
                handleInputChange(value?.id || "", LibraryValue.city)
              }
              errorMessage={errors.city}
              options={cities}
              value={library.city}
            />
            <Input
              label="Address*"
              errorMessage={errors.address}
              value={library.address}
              onChange={(value: string) =>
                handleInputChange(value, LibraryValue.address)
              }
              multiline
            />
            <Input
              label="Phone*"
              errorMessage={errors.phone}
              value={library.phone}
              onChange={(value: string) =>
                handleInputChange(value, LibraryValue.phone)
              }
            />
          </ColumnFlex>
        </StyledColumnFlex>

        <StyledColumnFlex>
          <Typography
            variant="h3"
            sx={{
              marginTop: { sm: "30px", md: "0" },
            }}
          >
            {ScheduleTitle}
          </Typography>
          <ColumnFlex gap="20px">
            <AlignedFlex>
              <StyledTypography variant="h1">Monday-Friday:</StyledTypography>

              <ColumnFlex gap="20px">
                <TimePicker
                  label="From*"
                  errorMessage={errors.schedule?.mondayFriday?.from}
                  value={library.schedule.mondayFriday.from}
                  onChange={(value) =>
                    handleMondayFriday(value, ScheduleTimeValue.from)
                  }
                />
                <TimePicker
                  label="To*"
                  errorMessage={errors.schedule?.mondayFriday?.to}
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
                  errorMessage={errors.schedule?.saturday?.from}
                  onChange={(value) =>
                    handleSaturday(value, ScheduleTimeValue.from)
                  }
                />
                <TimePicker
                  label="To*"
                  value={library.schedule.saturday.to}
                  errorMessage={errors.schedule?.saturday?.to}
                  onChange={(value) =>
                    handleSaturday(value, ScheduleTimeValue.to)
                  }
                />
              </ColumnFlex>
            </AlignedFlex>
          </ColumnFlex>
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
