import { ColumnFlex } from "@/components/Flex";
import Input from "@/components/Input";
import Table from "@/components/Table";
import Autocomplete from "@/components/Autocomplete";
import Paper from "@mui/material/Paper";
import {
  SearchPlaceholder,
  customersColumns,
  Cities,
} from "../Customers.const";
import { CustomersOverviewProps } from "~/types/Customers.type";
import { StyledFilters } from "~/components/Books/Books.style";

const CustomersOverview: React.FC<CustomersOverviewProps> = ({
  customers,
  page,
  filter,
  onPageChange,
  onSearchChange,
  onCityChange,
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
          <Autocomplete
            onChange={onCityChange}
            options={cities}
            value={filter.city}
            placeholder={Cities}
            width="200px"
          />
        </StyledFilters>

        <Table
          columns={customersColumns}
          rows={customers.data}
          count={customers.count}
          page={page}
          onPageChange={onPageChange}
          onDelete={onDelete}
        />
      </ColumnFlex>
    </Paper>
  );
};

export default CustomersOverview;
