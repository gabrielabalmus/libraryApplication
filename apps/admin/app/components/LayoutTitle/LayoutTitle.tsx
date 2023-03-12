import Typography from "@mui/material/Typography";
import {
  StyledArrowIcon,
  StyledHeaderFlex,
  StyledIconButton,
} from "./LayoutTitle.style";
import { LayoutTitleProps } from "~/types/LayoutTitle.type";
import { useNavigate } from "@remix-run/react";
import { AlignedFlex } from "@/components/Flex/Flex";

const LayoutTitle: React.FC<LayoutTitleProps> = ({
  title,
  backUrl,
  children,
}) => {
  const navigate = useNavigate();

  return (
    <StyledHeaderFlex>
      <AlignedFlex>
        {backUrl && (
          <StyledIconButton onClick={() => navigate(backUrl)}>
            <StyledArrowIcon />
          </StyledIconButton>
        )}

        <Typography variant="h4">{title}</Typography>
      </AlignedFlex>

      {children}
    </StyledHeaderFlex>
  );
};

export default LayoutTitle;
