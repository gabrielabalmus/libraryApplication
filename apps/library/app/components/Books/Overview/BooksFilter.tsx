import { BooksFilterProps } from "~/types/Books.type";
import Autocomplete from "@/components/Autocomplete";
import { StyledFilter } from "../Books.style";
import { Filter, FilterSubtitle } from "../Books.const";
import { Typography } from "@mui/material";
import { ColumnFlex } from "@/components/Flex";

const BooksFilter: React.FC<BooksFilterProps> = ({
  filter,
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
    <StyledFilter>
      <ColumnFlex gap="10px">
        <Typography variant="h3">{Filter}</Typography>
        <Typography variant="h1" lineHeight="20px">
          {FilterSubtitle}
        </Typography>
      </ColumnFlex>

      <Autocomplete
        label="Library"
        onChange={onLibraryChange}
        options={libraries}
        value={filter.library}
      />
      <Autocomplete
        label="Category"
        onChange={onCategoryChange}
        options={categories}
        value={filter.category}
      />
      <Autocomplete
        label="Publish house"
        onChange={onPublishHouseChange}
        options={publishHouses}
        value={filter.publishHouse}
      />
      <Autocomplete
        label="Language"
        onChange={onLanguageChange}
        options={languages}
        value={filter.language}
      />
    </StyledFilter>
  );
};

export default BooksFilter;
