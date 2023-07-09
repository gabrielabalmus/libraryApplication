import Flex, { ColumnFlex } from "@/components/Flex";
import collorPalette from "@/theme/colorPalette";
import styled from "styled-components";
import { styled as MuiStyled } from "@mui/material/styles";
import FormHelperText, {
  FormHelperTextProps,
} from "@mui/material/FormHelperText";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography, { TypographyProps } from "@mui/material/Typography";

export const StyledAutocomplete = styled(Flex)`
  justify-content: end;
  gap: 20px;
  flex: 1;
`;

export const StyledTableColumn = styled(ColumnFlex)`
  border: 1px solid ${collorPalette.grey.base};
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  text-align: left;
  min-width: 600px;
  td {
    padding: 7px;
    white-space: nowrap;
  }
  th {
    padding: 0px 7px 7px 7px;
    white-space: nowrap;
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

export const StyledIconButton = MuiStyled(IconButton)<IconButtonProps>(
  ({ theme }) =>
    theme.unstable_sx({
      padding: "0",
    })
);

export const EndFlex = styled(Flex)`
  gap: 15px;
  align-items: baseline;
  background-color: ${collorPalette.grey.lighter};
  padding: 10px 20px;
`;

export const StyleFlex = styled(Flex)`
  gap: 20px;
  @media (max-width: 950px) {
    gap: 10px;
    flex-direction: column;
  }
`;

export const StyleColumnFlex = styled(Flex)`
  gap: 20px;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;


export const DateColumnFlex = styled(ColumnFlex)`
  gap: 10px;
  background-color: ${collorPalette.grey.lighter};
  padding: 10px 20px;
`;

export const StyledTypography = MuiStyled(Typography)<TypographyProps>(
  ({ theme }) =>
    theme.unstable_sx({
      "&.MuiTypography-root": {
        fontSize: "16px",
      },
    })
);
