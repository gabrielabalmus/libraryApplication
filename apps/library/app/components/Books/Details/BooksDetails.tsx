import Paper from "@mui/material/Paper";
import { StyledMainTitle } from "~/components/Contact/Contact.style";
import Typography from "@mui/material/Typography";
import {
  StyledFlex,
  StyledImage,
  StyledCenteredAlignedFlex,
} from "../Books.style";
import { BookDetailsProps } from "~/types/Books.type";
import { ColumnFlex } from "@/components/Flex";
import BooksUnits from "./BooksUnits";

const BooksDetails: React.FC<BookDetailsProps> = ({
  book,
  page,
  onPageChange,
  filter,
  onLibraryChange,
  onCityChange,
  libraries,
  cities,
}) => {
  const { data } = book;

  return (
    <Paper className="overview-paper">
      <StyledMainTitle variant="h4" marginBottom="40px">
        Book
      </StyledMainTitle>

      <ColumnFlex gap="30px">
        <StyledFlex>
          <StyledCenteredAlignedFlex>
            <StyledImage src={data.image} />
          </StyledCenteredAlignedFlex>

          <ColumnFlex flex="1" gap="15px">
            <Typography variant="h4">{data.name}</Typography>

            <ColumnFlex gap="5px">
              <Typography variant="h2">
                Author: <b>{` ${data.author}`}</b>
              </Typography>
              <Typography variant="h2">
                Publish house: <b>{` ${data.publishHouse}`}</b>
              </Typography>
              <Typography variant="h2">
                Category: <b>{` ${data.category}`}</b>
              </Typography>
              <Typography variant="h2">
                Language: <b>{` ${data.language}`}</b>
              </Typography>
              <Typography variant="h2">
                Release year: <b>{` ${data.releaseYear}`}</b>
              </Typography>
            </ColumnFlex>
          </ColumnFlex>
        </StyledFlex>

        <ColumnFlex gap="10px">
          <Typography variant="h3">Description</Typography>
          <Typography variant="h2" whiteSpace="pre-wrap">
            {data.description}
          </Typography>
        </ColumnFlex>

        <BooksUnits
          book={book}
          page={page}
          onPageChange={onPageChange}
          filter={filter}
          onLibraryChange={onLibraryChange}
          onCityChange={onCityChange}
          libraries={libraries}
          cities={cities}
        />
      </ColumnFlex>
    </Paper>
  );
};

export default BooksDetails;
