import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import TableHead from "@mui/material/TableHead";
import { TableProps } from "./Table.types";
import TableContainer from "@mui/material/TableContainer";
import { StyledTable, StyledTableRow } from "./Table.style";
import { ColumnFlex } from "@/components/Flex";

const PaginatedTableContainer: React.FC<TableProps> = ({ columns, rows }) => {
  const [page, setPage] = useState(0);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  return (
    <ColumnFlex>
      <TableContainer>
        <StyledTable>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell>{column.value}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                {columns.map((column) => (
                  <TableCell>{row[column.name]}</TableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={rows.length}
        rowsPerPage={10}
        page={page}
        onPageChange={handleChangePage}
      />
    </ColumnFlex>
  );
};

export default PaginatedTableContainer;
