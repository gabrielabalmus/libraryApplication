import Typography from "@mui/material/Typography";
import { useCallback } from "react";
import {
  StyledArrowIcon,
  StyledButton,
  StyledTitleFlex,
} from "./LayoutTitle.style";
import { LayoutTitleProps } from "./LayoutTitle.type";
import { useNavigate } from "@remix-run/react";

const LayoutTitle: React.FC<LayoutTitleProps> = ({ title, backUrl }) => {
  const navigate = useNavigate();

  const handleOnClick = useCallback(() => {
    if (backUrl) navigate(backUrl);
  }, []);

  return (
    <StyledTitleFlex>
      {backUrl && (
        <StyledButton disableRipple={true} onClick={handleOnClick}>
          <StyledArrowIcon />
        </StyledButton>
      )}
      <Typography variant="h4">{title}</Typography>
    </StyledTitleFlex>
  );
};

export default LayoutTitle;
