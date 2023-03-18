import Input from "@/components/Input";
import Autocomplete from "@/components/Autocomplete";
import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import { BookLibrariesValues, BooksLibrariesProps } from "~/types/Books.type";
import { StyledRemoveFab, StyledRemoveIcon, UnitsFlex } from "../Books.style";

const BooksUnits: React.FC<BooksLibrariesProps> = ({
  bookLibrary,
  onChange,
  libraries,
  error,
  onRemoveClick,
}) => (
  <UnitsFlex>
    <Autocomplete
      label="Library*"
      onChange={(value: AutocompleteOptions | null) =>
        onChange(value?.id || "", BookLibrariesValues.library)
      }
      errorMessage={error.library}
      options={libraries}
      value={bookLibrary.library}
    />
    <Input
      label="SKU*"
      errorMessage={error.sku}
      value={bookLibrary.sku}
      onChange={(value: string) => onChange(value, BookLibrariesValues.sku)}
    />
    <Input
      label="Place*"
      errorMessage={error.place}
      value={bookLibrary.place}
      onChange={(value: string) => onChange(value, BookLibrariesValues.place)}
    />
    <StyledRemoveFab color="primary" onClick={onRemoveClick}>
      <StyledRemoveIcon />
    </StyledRemoveFab>
  </UnitsFlex>
);

export default BooksUnits;
