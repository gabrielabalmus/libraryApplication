import Flex, { ColumnFlex } from "@/components/Flex";
import collorPalette from "@/theme/colorPalette";
import styled from "styled-components";
import { styled as MuiStyled } from "@mui/material/styles";
import FormHelperText, {
  FormHelperTextProps,
} from "@mui/material/FormHelperText";

export const StyledAutocomplete = styled(Flex)`
  justify-content: end;
  gap: 20px;
  flex: 1;
`;

export const StyledTableColumn = styled(ColumnFlex)`
  border: 1px solid ${collorPalette.grey.base};
  padding: 15px;
  border-radius: 5px;
`;

export const StyledTable = styled.table`
  text-align: left;
  td {
    padding: 7px;
  }
  th {
    padding: 0px 7px 7px 7px;
  }
`;

export const StyledRow = styled.tr`
  background-color: ${collorPalette.grey.lighter};
  h2 {
    min-height: 20px;
  }
`;

export const StyledSearch = styled(Flex)`
  gap: 20px;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledFormHelperText = MuiStyled(
  FormHelperText
)<FormHelperTextProps>(({ theme }) =>
  theme.unstable_sx({
    marginBottom: "5px",
  })
);

export const StyledFlex = styled(Flex)`
  justify-content: space-between;
  align-items: center;
`;