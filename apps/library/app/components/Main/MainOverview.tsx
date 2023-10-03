import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import {
  StyledImage,
  StyledImageWrapper,
  StyledTypography,
  StyledColumn,
  StyledHeading,
} from "./Main.style";
import { CenteredColumnFlex, ColumnFlex } from "@/components/Flex";
import { Typography } from "@mui/material";

const MainOverview: React.FC = () => {
  return (
    <>
      <StyledImageWrapper>
        <StyledHeading>
          <Typography variant="h6">
            Your Source for Learning and Discovery
          </Typography>
          <Typography variant="h3">Where Words Come to Life</Typography>
        </StyledHeading>

        <StyledImage src="/main_wallpaper.jpg" />
      </StyledImageWrapper>

      <Container>
        <Paper className="overview-paper">
          <ColumnFlex gap="50px">
            <CenteredColumnFlex gap="30px">
              <Typography variant="h4">About us</Typography>
              <StyledTypography variant="h2">
                Discover a world of wonders at our library. With a diverse
                collection of books and engaging events, we're a hub of
                knowledge and creativity. Explore new ideas, meet fellow
                enthusiasts, and let your imagination soar within the walls of
                our welcoming space.
              </StyledTypography>
            </CenteredColumnFlex>

            <StyledColumn gap="30px">
              <Typography variant="h4">Our mission</Typography>
              <StyledTypography variant="h2">
                At our Library, our mission is to foster a love for learning,
                provide access to a diverse range of information and resources,
                and create a welcoming environment that encourages intellectual
                exploration and community engagement. We aim to inspire
                curiosity, enrich lives, and empower individuals with the tools
                they need to succeed in an ever-changing world.
              </StyledTypography>
            </StyledColumn>

            <CenteredColumnFlex gap="30px">
              <Typography variant="h4">Our services</Typography>
              <StyledTypography variant="h2">
                It is necessary to have an account to reserve and borrow books.
                They can be borrowed by coming directly to the library or you
                can reserve them online and then pick them up from the library
                in a maximum of 2 days. You have a period of 30 days to read
                them, after that you will be penalized with 0.1 euro per day.
              </StyledTypography>
            </CenteredColumnFlex>
          </ColumnFlex>
        </Paper>
      </Container>
    </>
  );
};

export default MainOverview;
