import Autocomplete from "@/components/Autocomplete";
import { ColumnFlex } from "@/components/Flex";
import Input from "@/components/Input";
import Table from "@/components/Table";
import Paper from "@mui/material/Paper";
import { StyledFilters } from "~/components/Books/Books.style";
import {
  SearchPlaceholder,
  loansColumns,
  Cities,
  Status,
  LoanStatuses,
} from "../Loans.const";
import { LoansOverviewProps } from "~/types/Loans.type";
import { StyledAutocomplete } from "../Loans.style";

const LoansOverview: React.FC<LoansOverviewProps> = ({
  loans,
  page,
  filter,
  onPageChange,
  onSearchChange,
  onCityChange,
  onStatusChange,
  onDelete,
  cities,
}) => {
  return (
    <Paper className="overview-paper">
      <ColumnFlex gap="30px">
        <StyledFilters>
          <Input
            placeholder={SearchPlaceholder}
            onChange={onSearchChange}
            width="300px"
            value={filter.search}
          />
          <StyledAutocomplete>
            <Autocomplete
              onChange={onStatusChange}
              options={LoanStatuses}
              value={filter.status}
              placeholder={Status}
              width="200px"
            />
            <Autocomplete
              onChange={onCityChange}
              options={cities}
              value={filter.city}
              placeholder={Cities}
              width="200px"
            />
          </StyledAutocomplete>
        </StyledFilters>
        <Table
          columns={loansColumns}
          rows={loans.data}
          count={loans.count}
          page={page}
          onPageChange={onPageChange}
          onDelete={onDelete}
        />
      </ColumnFlex>
    </Paper>
  );
};

export default LoansOverview;
