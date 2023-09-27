import Paper from "@mui/material/Paper";
import { ContactOverviewProps } from "~/types/Contact.type";
import { StyledBox, StyledTitle, StyledMainTitle } from "./Contact.style";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { ColumnFlex } from "@/components/Flex";
import moment from "moment";
import { ContactTitle } from "./Contact.const";

const ContactOverview: React.FC<ContactOverviewProps> = ({ libraries }) => {
  return (
    <Paper className="overview-paper">
      <StyledMainTitle variant="h4">{ContactTitle}</StyledMainTitle>

      <Grid container spacing={3}>
        {libraries.map((item) => {
          return (
            <Grid item xs={12} md={6}>
              <StyledTitle variant="h3">{item.name}</StyledTitle>

              <StyledBox>
                <Typography>
                  <b>Address:</b> {item.address}
                </Typography>

                <Typography>
                  <b>City:</b> {item.city}
                </Typography>

                <Typography>
                  <b>Phone:</b> {item.phone}
                </Typography>

                <ColumnFlex>
                  <Typography>
                    <b>Schedule:</b>
                  </Typography>
                  <Typography>
                    {`Monday-Friday: ${moment(
                      item.schedule.mondayFriday.from
                    ).format("HH:mm")} - ${moment(
                      item.schedule.mondayFriday.to
                    ).format("HH:mm")}`}
                  </Typography>

                  <Typography>
                    {`Saturday: ${moment(item.schedule.saturday.from).format(
                      "HH:mm"
                    )} - ${moment(item.schedule.saturday.to).format("HH:mm")}`}
                  </Typography>
                </ColumnFlex>
              </StyledBox>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default ContactOverview;
