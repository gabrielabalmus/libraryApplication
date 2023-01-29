import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";
import TableHead from "@mui/material/TableHead";
import { TableProps } from "./Table.types";
import TableContainer from "@mui/material/TableContainer";
import {
  StyledTable,
  StyledTableCell,
  StyledBodyRow,
  StyledHeaderRow,
} from "./Table.style";
import { ColumnFlex } from "@/components/Flex";
import TableActions from "./components/TableActions";
import { useLocation, useNavigate } from "@remix-run/react";

const PaginatedTableContainer: React.FC<TableProps> = ({ columns, rows }) => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleEditRow = (rowId: string) => {
    navigate(`${location.pathname}/${rowId}`);
  };

  return (
    <ColumnFlex>
      <TableContainer>
        <StyledTable>
          <TableHead>
            <StyledHeaderRow>
              {columns.map((column, index) => (
                <StyledTableCell key={index}>{column.value}</StyledTableCell>
              ))}

              <StyledTableCell align="right">Delete</StyledTableCell>
            </StyledHeaderRow>
          </TableHead>

          <TableBody>
            {rows.map((row, rowIndex) => (
              <StyledBodyRow
                key={rowIndex}
                onClick={() => handleEditRow(row.id)}
              >
                {columns.map((column, columnIndex) => (
                  <TableCell key={columnIndex}>
                    {row[column.name] || "-"}
                  </TableCell>
                ))}

                <TableCell align="right">
                  <TableActions />
                </TableCell>
              </StyledBodyRow>
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
