import { BooksListProps } from "~/types/Books.type";
import Input from "@/components/Input";
import { SearchPlaceholder } from "../Books.const";
import { StyledBookBox, StyledColumnFlex, StyledImage, StyledImageFlex } from "../Books.style";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TablePagination from "@mui/material/TablePagination";
import colorPalette from "@/theme/colorPalette";
import { ColumnFlex } from "@/components/Flex";
import { Divider } from "@mui/material";

const BooksList: React.FC<BooksListProps> = ({
  books,
  page,
  filter,
  onPageChange,
  onSearchChange,
  onBookSelect,
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

      <Grid container spacing={2}>
        {books.data.map((book) => (
          <Grid item xs={6} md={4}>
            <StyledBookBox onClick={() => onBookSelect(book.id)}>
              <StyledImageFlex>
                <StyledImage src={book.image} />
              </StyledImageFlex>

              <Divider style={{ borderColor: colorPalette.grey.light }} />

              <ColumnFlex>
                <Typography>{book.name}</Typography>
                <Typography variant="h1" color={colorPalette.grey.base}>
                  by {book.author}
                </Typography>
              </ColumnFlex>
            </StyledBookBox>
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
        rowsPerPageOptions={[]}
        count={books.count}
        rowsPerPage={6}
        page={page - 1}
        onPageChange={handleChangePage}
      />
    </StyledColumnFlex>
  );
};

export default BooksList;
