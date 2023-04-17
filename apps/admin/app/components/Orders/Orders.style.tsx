import Flex, { ColumnFlex } from "@/components/Flex";
import collorPalette from "@/theme/colorPalette";
import styled from "styled-components";

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
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
