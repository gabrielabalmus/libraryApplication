import { ColumnFlex } from "@/components/Flex";
import Input from "@/components/Input";
import TableContainer from "@/components/Table";
import Paper from "@mui/material/Paper";
import { SearchPlaceholder, booksColumns } from "../Books.const";
import { BooksOverviewProps } from "../Books.type";

const BooksOverview: React.FC<BooksOverviewProps> = ({
  books,
  page,
  search,
  onPageChange,
  onSearchChange,
  onDelete,
}) => {
  return (
    <Paper className="overview-paper">
      <ColumnFlex gap="20px">
        <Input
          placeholder={SearchPlaceholder}
          onChange={onSearchChange}
          width="300px"
          value={search}
        />
        <TableContainer
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
