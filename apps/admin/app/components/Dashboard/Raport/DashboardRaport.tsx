import Paper from "@mui/material/Paper";
import DatePicker from "@/components/DatePicker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { DashboardReportProps } from "~/types/Dashboard.type";
import { KeyboardEvent } from "react";
import Autocomplete from "@/components/Autocomplete";
import { Libraries, Status } from "../Dashboard.const";
import { StyledFlex } from "../Dashboard.style";
import { LoanStatuses } from "~/components/Loans/Loans.const";
import { RaportOptions } from "../Dashboard.helper";
import { ColumnFlex } from "@/components/Flex";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardRaport: React.FC<DashboardReportProps> = ({
  filter,
  raport,
  libraries,
  onYearChange,
  onLibraryChange,
  onStatusChange,
}) => {
  const dateKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <Paper className="overview-paper">
      <ColumnFlex gap="30px">
        <StyledFlex>
          <DatePicker
            label="Year"
            value={filter.year}
            views={["year"]}
            onChange={onYearChange}
            onKeyDown={dateKeyDown}
          />
          <Autocomplete
            onChange={onLibraryChange}
            options={libraries}
            value={filter.library}
            label={Libraries}
            width="200px"
          />
          <Autocomplete
            onChange={onStatusChange}
            options={LoanStatuses}
            value={filter.status}
            label={Status}
            width="200px"
          />
        </StyledFlex>
        <Bar data={raport} options={RaportOptions(filter.year)} />
      </ColumnFlex>
    </Paper>
  );
};

export default DashboardRaport;
