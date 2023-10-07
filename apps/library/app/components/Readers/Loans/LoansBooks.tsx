import { LoanBooks } from "~/types/Readers.type";
import { booksColumns } from "../Readers.const";
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
import TableContainer from "@mui/material/TableContainer";
import colorPalette from "@/theme/colorPalette";

const LoansBooks: React.FC<{
  books: LoanBooks[];
}> = ({ books }) => {
  return (
    <TableContainer>
      <StyledTable style={{ backgroundColor: colorPalette.grey.lightest }}>
        <TableHead>
          <StyledHeaderRow>
            {booksColumns.map((column, index) => (
              <StyledTableCell key={index}>{column.value}</StyledTableCell>
            ))}
          </StyledHeaderRow>
        </TableHead>

        <TableBody>
          {books.map((row: any, rowIndex) => (
            <StyledBodyRow key={rowIndex}>
              {booksColumns.map((column, columnIndex) => (
                <TableCell key={columnIndex}>
                  {row[column.name] || "-"}
                </TableCell>
              ))}
            </StyledBodyRow>
          ))}
        </TableBody>

        {books.length === 0 && (
          <EmptyBodyRow>
            <TableCell colSpan={6} align="center">
              No data
            </TableCell>
          </EmptyBodyRow>
        )}
      </StyledTable>
    </TableContainer>
  );
};

export default LoansBooks;
