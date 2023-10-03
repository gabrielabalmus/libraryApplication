import { BooksListProps } from "~/types/Books.type";
import Input from "@/components/Input";
import { SearchPlaceholder } from "../Books.const";
import { StyledColumnFlex, StyledImage } from "../Books.style";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TablePagination from "@mui/material/TablePagination";
import collorPalette from "@/theme/colorPalette";

const BooksList: React.FC<BooksListProps> = ({
  books,
  page,
  filter,
  onPageChange,
  onSearchChange,
}) => {
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    onPageChange(newPage + 1);
  };

  return (
    <StyledColumnFlex>
      <Input
        placeholder={SearchPlaceholder}
        onChange={onSearchChange}
        width="300px"
        value={filter.search}
      />

      <Grid container spacing={4}>
        {books.data.map((book) => (
          <Grid item xs={6} md={4}>
            <StyledImage src={book.image} />
            <Typography>{book.name}</Typography>
            <Typography variant="h1" color={collorPalette.grey.base}>
              by {book.author}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {books.data.length === 0 && (
        <Typography
          align="center"
          variant="h1"
          fontWeight="400"
          marginTop="50px"
        >
          No data
        </Typography>
      )}

      <TablePagination
        component="div"
        count={books.count}
        rowsPerPage={6}
        page={page - 1}
        onPageChange={handleChangePage}
      />
    </StyledColumnFlex>
  );
};

export default BooksList;
