import { ColumnFlex } from "@/components/Flex";
import Input from "@/components/Input";
import Table from "@/components/Table";
import Autocomplete from "@/components/Autocomplete";
import Paper from "@mui/material/Paper";
import {
  SearchPlaceholder,
  booksColumns,
  Categories,
  Libraries,
} from "../Books.const";
import { BooksOverviewProps } from "~/types/Books.type";
import { StyledFilters } from "../Books.style";
import { StyledAutocomplete } from "~/components/Loans/Loans.style";

const BooksOverview: React.FC<BooksOverviewProps> = ({
  books,
  page,
  filter,
  onPageChange,
  onSearchChange,
  onCategoryChange,
  onLibraryChange,
  onDelete,
  categories,
  libraries,
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
              onChange={onCategoryChange}
              options={categories}
              value={filter.category}
              placeholder={Categories}
              width="200px"
            />
            <Autocomplete
              onChange={onLibraryChange}
              options={libraries}
              value={filter.library}
              placeholder={Libraries}
              width="200px"
            />
          </StyledAutocomplete>
        </StyledFilters>

        <Table
          columns={booksColumns}
          rows={books.data}
          count={books.count}
          page={page}
          onPageChange={onPageChange}
          onDelete={onDelete}
        />
      </ColumnFlex>
    </Paper>
  );
};

export default BooksOverview;
