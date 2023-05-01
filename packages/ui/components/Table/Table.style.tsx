import collorPalette from "@/theme/colorPalette";
import { styled as MuiStyled } from "@mui/material/styles";
import Table, { TableProps } from "@mui/material/Table";
import TableCell, { TableCellProps } from "@mui/material/TableCell";
import TableRow, { TableRowProps } from "@mui/material/TableRow";

export const StyledHeaderRow = MuiStyled(TableRow)<TableRowProps>(({ theme }) =>
  theme.unstable_sx({
    "td, th": { border: 0, whiteSpace: "nowrap" },
  })
);

export const StyledBodyRow = MuiStyled(TableRow)<TableRowProps>(({ theme }) =>
  theme.unstable_sx({
    "td, th": { border: 0, whiteSpace: "nowrap" },
    borderTop: `1px solid ${collorPalette.grey.lighter}`,
    borderRight: `1px solid transparent`,
    borderLeft: `1px solid transparent`,
    "&:last-child": { borderBottom: `1px solid transparent` },
    "&:hover": {
      border: `1px solid ${collorPalette.primary.base}`,
      cursor: "pointer",
    },
  })
);

export const EmptyBodyRow = MuiStyled(TableRow)<TableRowProps>(({ theme }) =>
  theme.unstable_sx({
    "td, th": { border: 0, whiteSpace: "nowrap" },
    borderTop: `1px solid ${collorPalette.grey.lighter}`,
    borderRight: `1px solid transparent`,
    borderLeft: `1px solid transparent`,
  })
);

export const StyledTable = MuiStyled(Table)<TableProps>(({ theme }) =>
  theme.unstable_sx({
    minWidth: 600,
    marginBottom: "20px",
  })
);

export const StyledTableCell = MuiStyled(TableCell)<TableCellProps>(
  ({ theme }) =>
    theme.unstable_sx({
      fontWeight: 600,
      fontSize: "16px",
    })
);
