import Flex, { ColumnFlex, SpaceBetweenFlex } from "@/components/Flex";
import styled from "styled-components";
import collorPalette from "@/theme/colorPalette";
import { styled as MuiStyled } from "@mui/material/styles";
import Fab, { FabProps } from "@mui/material/Fab";
import RemoveIcon from "@mui/icons-material/Remove";

export const StyledFilters = styled(SpaceBetweenFlex)`
  gap: 20px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledColumnFlex = styled(ColumnFlex)`
  gap: 20px;
  flex: 1;
  width: 100%;
`;

export const StyleFlex = styled(Flex)`
  gap: 50px;
  @media (max-width: 900px) {
    gap: 20px;
    flex-direction: column;
  }
`;

export const UnitsFlex = styled(Flex)`
  gap: 20px;
  background-color: ${collorPalette.grey.lightest};
  padding: 20px;
  border-radius: 10px;
  position: relative;
  @media (max-width: 900px) {
    gap: 20px;
    flex-direction: column;
  }
`;

export const StyledAddFab = MuiStyled(Fab)<FabProps>(({ theme }) =>
  theme.unstable_sx({
    width: "35px",
    height: "35px",
    minHeight: "35px",
    boxShadow: "none",
  })
);

export const StyledRemoveFab = MuiStyled(Fab)<FabProps>(({ theme }) =>
  theme.unstable_sx({
    width: "25px",
    height: "25px",
    minHeight: "25px",
    boxShadow: "none",
    position: "absolute",
    top: "-7px",
    right: "-7px",
  })
);

export const StyledRemoveIcon = MuiStyled(RemoveIcon)(({ theme }) =>
  theme.unstable_sx({
    width: "17px",
    height: "17px",
  })
);
