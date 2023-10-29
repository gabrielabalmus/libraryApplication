import TablePagination from "@mui/material/TablePagination";
import Typography from "@mui/material/Typography";
import { BookDetailsProps } from "~/types/Books.type";
import { ColumnFlex } from "@/components/Flex";
import { bookLibrariesColumns } from "../Books.const";
import TableContainer from "@mui/material/TableContainer";
import {
  EmptyBodyRow,
  StyledBodyRow,
  StyledHeaderRow,
  StyledTable,
  StyledTableCell,
} from "@/components/Table/Table.style";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import colorPalette from "@/theme/colorPalette";
import Button from "@/components/Button";
import { ButtonVariant } from "@/components/Button/Button.type";
import Autocomplete from "@/components/Autocomplete";
import { StyledAutocomplete } from "../Books.style";
import { useBooksToReserveContext } from "~/context/booksToReserve.context";

const BooksUnits: React.FC<BookDetailsProps> = ({
  book,
  page,
  onPageChange,
  filter,
  onLibraryChange,
  onCityChange,
  libraries,
  cities,
}) => {
  const { data, count, bookLibraries } = book;
  const { addBookToReserve, booksToReserve } = useBooksToReserveContext();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    onPageChange(newPage + 1);
  };

  const handleAddBook = (row: any) => {
    addBookToReserve({
      bookLibraryId: row.id,
      library: row.library,
      libraryId: row.libraryId,
      name: data.name,
      author: data.author,
      category: data.category,
      city: row.city,
      place: row.place,
      cityId: row.cityId,
      sku: row.sku,
    });
  };

  return (
    <ColumnFlex gap="20px">
      <ColumnFlex gap="10px">
        <Typography variant="h3">Units</Typography>
        <Typography variant="h1">
          We will display books that can be reserved depending on the desired
          library.
        </Typography>
      </ColumnFlex>
      <StyledAutocomplete>
        <Autocomplete
          label="City"
          onChange={onCityChange}
          options={cities}
          value={filter.city}
          width="200px"
        />
        <Autocomplete
          label="Library"
          onChange={onLibraryChange}
          options={libraries}
          value={filter.library}
          disabled={!filter.city}
          width="200px"
        />
      </StyledAutocomplete>

      <TableContainer>
        <StyledTable style={{ backgroundColor: colorPalette.grey.lightest }}>
          <TableHead>
            <StyledHeaderRow>
              {bookLibrariesColumns.map((column, index) => (
                <StyledTableCell key={index}>{column.value}</StyledTableCell>
              ))}
            </StyledHeaderRow>
          </TableHead>

          <TableBody>
            {bookLibraries.map((row: any, rowIndex) => (
              <StyledBodyRow key={rowIndex}>
                {bookLibrariesColumns.map((column, columnIndex) => (
                  <TableCell key={columnIndex}>
                    {row[column.name] || "-"}
                  </TableCell>
                ))}
                <TableCell width="80px">
                  {row.available === "YES" && (
                    <Button
                      variant={ButtonVariant.outlined}
                      title="Add"
                      width="80px"
                      disabled={booksToReserve.some(
                        (item) => item.bookLibraryId === row.id
                      )}
                      onClick={() => handleAddBook(row)}
                    />
                  )}
                </TableCell>
              </StyledBodyRow>
            ))}
          </TableBody>

          {bookLibraries.length === 0 && (
            <EmptyBodyRow>
              <TableCell colSpan={6} align="center">
                No data
              </TableCell>
            </EmptyBodyRow>
          )}
        </StyledTable>
      </TableContainer>

      <TablePagination
        component="div"
        rowsPerPageOptions={[]}
        count={count}
        rowsPerPage={5}
        page={page - 1}
        onPageChange={handleChangePage}
      />
    </ColumnFlex>
  );
};

export default BooksUnits;
