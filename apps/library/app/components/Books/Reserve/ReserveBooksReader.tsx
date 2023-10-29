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
import { readerColumns } from "../Books.const";
import { ReaderState } from "~/types/Readers.type";

const ReserveBooksReader: React.FC<{ reader: ReaderState }> = ({ reader }) => {
  return (
    <TableContainer>
      <StyledTable style={{ backgroundColor: colorPalette.grey.lightest }}>
        <TableHead>
          <StyledHeaderRow>
            {readerColumns.map((column, index) => (
              <StyledTableCell key={index}>{column.value}</StyledTableCell>
            ))}
          </StyledHeaderRow>
        </TableHead>

        <TableBody>
          <StyledBodyRow>
            {readerColumns.map((column, columnIndex) => (
              <TableCell key={columnIndex}>
                {reader[column.name as keyof ReaderState]}
              </TableCell>
            ))}
          </StyledBodyRow>
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default ReserveBooksReader;
