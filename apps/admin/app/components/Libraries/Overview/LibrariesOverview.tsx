import Autocomplete from "@/components/Autocomplete";
import { ColumnFlex } from "@/components/Flex";
import Input from "@/components/Input";
import Table from "@/components/Table";
import Paper from "@mui/material/Paper";
import { StyledFilters } from "~/components/Books/Books.style";
import { SearchPlaceholder, librariesColumns, Cities } from "../Libraries.const";
import { LibrariesOverviewProps } from "../Libraries.type";

const LibrariesOverview: React.FC<LibrariesOverviewProps> = ({
  libraries,
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
          columns={librariesColumns}
          rows={libraries.data}
          count={libraries.count}
          page={page}
          onPageChange={onPageChange}
          onDelete={onDelete}
        />
      </ColumnFlex>
    </Paper>
  );
};

export default LibrariesOverview;
