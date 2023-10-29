import { useBooksToReserveContext } from "~/context/booksToReserve.context";
import TableContainer from "@mui/material/TableContainer";
import {
  StyledBodyRow,
  StyledHeaderRow,
  StyledTable,
  StyledTableCell,
} from "@/components/Table/Table.style";
import TableHead from "@mui/material/TableHead";
import colorPalette from "@/theme/colorPalette";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { booksColumns } from "../Books.const";
import TableActions from "@/components/Table/components/TableActions";

const ReserveBooksList: React.FC = () => {
  const { booksToReserve, removeBookToReserve } = useBooksToReserveContext();

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
          {booksToReserve.map((row: any, rowIndex) => (
            <StyledBodyRow key={rowIndex}>
              {booksColumns.map((column, columnIndex) => (
                <TableCell key={columnIndex}>
                  {row[column.name] || "-"}
                </TableCell>
              ))}
              <TableCell align="right" width="50px">
                <TableActions
                  onDelete={() => removeBookToReserve(row.bookLibraryId)}
                />
              </TableCell>
            </StyledBodyRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default ReserveBooksList;
