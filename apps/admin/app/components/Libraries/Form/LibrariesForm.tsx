import Paper from "@mui/material/Paper";
import Input from "@/components/Input";
import { useState } from "react";
import { useNavigate } from "@remix-run/react";
import {
  ErrorState,
  LibrariesFormProps,
  LibraryState,
  LibraryValue,
  ScheduleTimeValue,
} from "../Libraries.type";
import { checkIfValidDate } from "../Libraries.helper";
import Button from "@/components/Button";
import { ButtonType, ButtonVariant } from "@/components/Button/Button.type";
import Grid from "@mui/material/Grid";
import { ColumnFlex } from "@/components/Flex";
import TimePicker from "@/components/TimePicker";
import { Dayjs } from "dayjs";
import { details, scheduleTitle } from "../Libraries.const";
import {
  StyledFlexButton,
  StyledTitle,
  StyledTypography,
} from "../Libraries.style";
import { AlignedFlex } from "@/components/Flex/Flex";

const LibrariesForm: React.FC<LibrariesFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();

  const [data, setData] = useState<LibraryState>({
    name: "",
    city: "",
    address: "",
    phone: "",
    schedule: {
      mondayFriday: { from: "", to: "" },
      saturday: { from: "", to: "" },
    },
  });

  const [inputErrors, setInputErrors] = useState<ErrorState>({});

  const handleInputChange = (value: string, field: LibraryValue) => {
    setData((oldData) => ({ ...oldData, [field]: value }));

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

    setData((oldData) => ({
      ...oldData,
      schedule: {
        ...oldData.schedule,
        mondayFriday: { ...oldData.schedule.mondayFriday, [field]: newTime },
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

    setData((oldData) => ({
      ...oldData,
      schedule: {
        ...oldData.schedule,
        saturday: { ...oldData.schedule.saturday, [field]: newTime },
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
      data,
      callback: (fieldErrors: ErrorState) => setInputErrors(fieldErrors),
    });
  };

  return (
    <Paper className="overview-paper">
      <Grid container spacing={5}>
        <Grid item xs={12} md={5}>
          <ColumnFlex>
            <StyledTitle variant="h3">{details}</StyledTitle>
            <br />

            <Input
              label="Name*"
              errorMessage={inputErrors.name}
              defaultValue={data.name}
              onChange={(value: string) =>
                handleInputChange(value, LibraryValue.name)
              }
              width="350px"
            />
            <Input
              label="City*"
              errorMessage={inputErrors.city}
              defaultValue={data.city}
              onChange={(value: string) =>
                handleInputChange(value, LibraryValue.city)
              }
              width="350px"
            />
            <Input
              label="Address*"
              errorMessage={inputErrors.address}
              defaultValue={data.address}
              onChange={(value: string) =>
                handleInputChange(value, LibraryValue.address)
              }
              width="350px"
              multiline
            />
            <Input
              label="Phone*"
              errorMessage={inputErrors.phone}
              defaultValue={data.phone}
              onChange={(value: string) =>
                handleInputChange(value, LibraryValue.phone)
              }
              width="350px"
            />
          </ColumnFlex>
        </Grid>

        <Grid item xs={12} md={7}>
          <ColumnFlex>
            <StyledTitle variant="h3">{scheduleTitle}</StyledTitle>
            <br />

            <AlignedFlex>
              <StyledTypography variant="h1">Monday-Friday:</StyledTypography>

              <ColumnFlex>
                <TimePicker
                  label="From"
                  errorMessage={inputErrors.schedule?.mondayFriday?.from}
                  value={data.schedule.mondayFriday.from}
                  onChange={(value) =>
                    handleMondayFriday(value, ScheduleTimeValue.from)
                  }
                />
                <TimePicker
                  label="To"
                  errorMessage={inputErrors.schedule?.mondayFriday?.to}
                  value={data.schedule.mondayFriday.to}
                  onChange={(value) =>
                    handleMondayFriday(value, ScheduleTimeValue.to)
                  }
                />
              </ColumnFlex>
            </AlignedFlex>

            <AlignedFlex>
              <StyledTypography variant="h1">Saturday:</StyledTypography>

              <ColumnFlex>
                <TimePicker
                  label="From"
                  value={data.schedule.saturday.from}
                  errorMessage={inputErrors.schedule?.saturday?.from}
                  onChange={(value) =>
                    handleSaturday(value, ScheduleTimeValue.from)
                  }
                />
                <TimePicker
                  label="To"
                  value={data.schedule.saturday.to}
                  errorMessage={inputErrors.schedule?.saturday?.to}
                  onChange={(value) =>
                    handleSaturday(value, ScheduleTimeValue.to)
                  }
                />
              </ColumnFlex>
            </AlignedFlex>
          </ColumnFlex>
        </Grid>
      </Grid>

      <StyledFlexButton>
        <Button
          title="Cancel"
          variant={ButtonVariant.outlined}
          onClick={() => navigate("/libraries")}
        />
        <Button
          type={ButtonType.submit}
          title="Create"
          variant={ButtonVariant.contained}
          onClick={handleOnSubmit}
        />
      </StyledFlexButton>
    </Paper>
  );
};

export default LibrariesForm;
