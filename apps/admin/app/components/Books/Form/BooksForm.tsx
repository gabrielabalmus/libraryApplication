import Paper from "@mui/material/Paper";
import Input from "@/components/Input";
import { useState } from "react";
import { useNavigate, useParams } from "@remix-run/react";
import { ErrorState, BooksFormProps, BookValue } from "../Books.type";
import Button from "@/components/Button";
import { ButtonType, ButtonVariant } from "@/components/Button/Button.type";
import Autocomplete from "@/components/Autocomplete";
import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import { InputType } from "@/components/Input/Input.type";
import { StyledFlexButton } from "~/components/Libraries/Libraries.style";
import { Details } from "../Books.const";
import { StyledColumnFlex, StyledTitle, StyleFlex } from "../Books.style";

const BooksForm: React.FC<BooksFormProps> = ({
  onSubmit,
  setBook,
  book,
  categories,
  publishHouses,
}) => {
  const navigate = useNavigate();
  const urlParams = useParams();

  const [inputErrors, setInputErrors] = useState<ErrorState>({});

  const handleInputChange = (value: string, field: BookValue) => {
    setBook((oldBook) => ({ ...oldBook, [field]: value }));

    if (inputErrors[field])
      setInputErrors((oldErrors) => {
        delete oldErrors[field];
        return oldErrors;
      });
  };

  const handleOnSubmit = () => {
    onSubmit({
      callback: (fieldErrors: ErrorState) => setInputErrors(fieldErrors),
    });
  };

  return (
    <Paper className="overview-paper">
      <StyledTitle variant="h3">{Details}</StyledTitle>

      <StyleFlex>
        <StyledColumnFlex>
          <Input
            label="Name*"
            errorMessage={inputErrors.name}
            value={book.name}
            onChange={(value: string) =>
              handleInputChange(value, BookValue.name)
            }
          />
          <Input
            label="Author*"
            errorMessage={inputErrors.author}
            value={book.author}
            onChange={(value: string) =>
              handleInputChange(value, BookValue.author)
            }
          />
          <Input
            label="Pages number*"
            type={InputType.number}
            errorMessage={inputErrors.pagesNumber}
            value={book.pagesNumber}
            onChange={(value: string) =>
              handleInputChange(value, BookValue.pagesNumber)
            }
          />
        </StyledColumnFlex>

        <StyledColumnFlex>
          <Autocomplete
            label="Category*"
            onChange={(value: AutocompleteOptions | null) =>
              handleInputChange(value?.id || "", BookValue.category)
            }
            errorMessage={inputErrors.category}
            options={categories}
            value={book.category}
          />
          <Autocomplete
            label="Publish house*"
            onChange={(value: AutocompleteOptions | null) =>
              handleInputChange(value?.id || "", BookValue.publishHouse)
            }
            errorMessage={inputErrors.publishHouse}
            options={publishHouses}
            value={book.publishHouse}
          />
          <Input
            label="Release year*"
            type={InputType.number}
            errorMessage={inputErrors.releaseYear}
            value={book.releaseYear}
            onChange={(value: string) =>
              handleInputChange(value, BookValue.releaseYear)
            }
          />
          <Input
            label="Language*"
            errorMessage={inputErrors.language}
            value={book.language}
            onChange={(value: string) =>
              handleInputChange(value, BookValue.language)
            }
          />
        </StyledColumnFlex>
      </StyleFlex>

      <StyledFlexButton>
        <Button
          title="Cancel"
          variant={ButtonVariant.outlined}
          onClick={() => navigate("/books")}
        />
        <Button
          type={ButtonType.submit}
          title={urlParams.bookId ? "Update" : "Create"}
          variant={ButtonVariant.contained}
          onClick={handleOnSubmit}
        />
      </StyledFlexButton>
    </Paper>
  );
};

export default BooksForm;
