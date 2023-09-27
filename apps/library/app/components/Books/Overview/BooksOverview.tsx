import Paper from "@mui/material/Paper";
import { StyledMainTitle } from "~/components/Contact/Contact.style";
import { BooksTitle } from "../Books.const";
import { BooksOverviewProps } from "~/types/Books.type";
import { StyledWrapper } from "../Books.style";
import BooksFilter from "./BooksFilter";
import BooksList from "./BooksList";

const BooksOverview: React.FC<BooksOverviewProps> = ({
  books,
  page,
  filter,
  onPageChange,
  onSearchChange,
  onCategoryChange,
  onLibraryChange,
  onLanguageChange,
  onPublishHouseChange,
  categories,
  libraries,
  publishHouses,
  languages,
}) => {
  return (
    <Paper className="overview-paper">
      <StyledMainTitle variant="h4">{BooksTitle}</StyledMainTitle>
      <StyledWrapper>
        <BooksFilter
          filter={filter}
          onCategoryChange={onCategoryChange}
          onLibraryChange={onLibraryChange}
          onPublishHouseChange={onPublishHouseChange}
          onLanguageChange={onLanguageChange}
          categories={categories}
          libraries={libraries}
          publishHouses={publishHouses}
          languages={languages}
        />
        <BooksList
          books={books}
          page={page}
          filter={filter}
          onPageChange={onPageChange}
          onSearchChange={onSearchChange}
        />
      </StyledWrapper>
    </Paper>
  );
};

export default BooksOverview;
