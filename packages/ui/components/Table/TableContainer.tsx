import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import TableHead from "@mui/material/TableHead";
import { TableProps } from "./Table.types";
import TableContainer from "@mui/material/TableContainer";
import {
  StyledTable,
  StyledTableCell,
  StyledBodyRow,
  StyledHeaderRow,
  EmptyBodyRow,
} from "./Table.style";
import Flex, { ColumnFlex } from "@/components/Flex";
import TableActions from "./components/TableActions";
import { useLocation, useNavigate } from "@remix-run/react";

const PaginatedTableContainer: React.FC<TableProps> = ({
  columns,
  rows,
  count,
  page,
  onPageChange,
  onDelete,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    onPageChange(newPage + 1);
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
                  <TableActions onDelete={() => onDelete(row.id)} />
                </TableCell>
              </StyledBodyRow>
            ))}
          </TableBody>

          {rows.length === 0 && (
            <EmptyBodyRow>
              <TableCell colSpan={12} align="center">
                No data
              </TableCell>
            </EmptyBodyRow>
          )}
        </StyledTable>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={count}
        rowsPerPage={5}
        page={page - 1}
        onPageChange={handleChangePage}
      />
    </ColumnFlex>
  );
};

export default PaginatedTableContainer;
