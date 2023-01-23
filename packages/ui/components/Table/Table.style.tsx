import { styled as MuiStyled } from "@mui/material/styles";
import Table, { TableProps } from "@mui/material/Table";
import TableRow, { TableRowProps } from "@mui/material/TableRow";

export const StyledTableRow = MuiStyled(TableRow)<TableRowProps>(({ theme }) =>
  theme.unstable_sx({
    "&:last-child td, &:last-child th": { border: 0 },
  })
);

export const StyledTable = MuiStyled(Table)<TableProps>(({ theme }) =>
  theme.unstable_sx({
    minWidth: 450,
  })
);
