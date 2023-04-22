import Paper from "@mui/material/Paper";
import Input from "@/components/Input";
import { ChangeEvent, useState } from "react";
import { useNavigate, useParams } from "@remix-run/react";
import {
  ErrorState,
  BooksFormProps,
  BookValue,
  BookLibrariesState,
  BookLibrariesValues,
} from "~/types/Books.type";
import Button from "@/components/Button";
import { ButtonType, ButtonVariant } from "@/components/Button/Button.type";
import Autocomplete from "@/components/Autocomplete";
import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import { InputType } from "@/components/Input/Input.type";
import { StyledFlexButton } from "~/components/Libraries/Libraries.style";
import {
  Details,
  ErrorImageUpload,
  initialBookLibrary,
  Units,
} from "../Books.const";
import { StyledColumnFlex, StyledAddFab, StyleFlex } from "../Books.style";
import BooksUnits from "./BooksUnits";
import { ColumnFlex, AlignedFlex } from "@/components/Flex";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { isEmpty } from "lodash";
import ImageUploader from "@/components/ImageUploader";
import { readFileAsync } from "@/utils/common";

const BooksForm: React.FC<BooksFormProps> = ({
  onSubmit,
  setBook,
  book,
  categories,
  libraries,
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

  const handleBookLibrariesChange = (
    value: string,
    field: BookLibrariesValues,
    index: number
  ) => {
    setBook((oldBook) => {
      const bookLibraries = oldBook.bookLibraries.map((item, i) => {
        if (i === index) {
          return { ...item, [field]: value };
        }
        return item;
      });

      return { ...oldBook, bookLibraries };
    });

    if (inputErrors.bookLibraries && inputErrors.bookLibraries[index][field])
      setInputErrors((oldErrors) => {
        oldErrors.bookLibraries && delete oldErrors.bookLibraries[index][field];
        return oldErrors;
      });
  };

  const handleAddBookLibrary = () => {
    setBook((oldBook) => ({
      ...oldBook,
      bookLibraries: [...oldBook.bookLibraries, initialBookLibrary],
    }));

    if (!isEmpty(inputErrors.bookLibraries))
      setInputErrors((oldErrors) => {
        delete oldErrors.bookLibraries;
        return oldErrors;
      });
  };

  const handleRemoveBookLibrary = (index: number) => {
    setBook((oldBook) => {
      const newBookLibraries = oldBook.bookLibraries.filter(
        (item, i) => i !== index
      );

      return {
        ...oldBook,
        bookLibraries: newBookLibraries,
      };
    });

    if (!isEmpty(inputErrors.bookLibraries))
      setInputErrors((oldErrors) => {
        delete oldErrors.bookLibraries;
        return oldErrors;
      });
  };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files && e.target.files[0];

      if (!file) {
        setInputErrors((oldErrors) => ({
          ...oldErrors,
          image: ErrorImageUpload,
        }));

        return;
      }

      const image = await readFileAsync(file);

      setBook((oldBook) => ({
        ...oldBook,
        image: image as string,
      }));

      if (inputErrors.image)
        setInputErrors((oldErrors) => {
          const { image, ...rest } = oldErrors;
          return rest;
        });
    } catch (err) {
      setInputErrors((oldErrors) => ({
        ...oldErrors,
        image: ErrorImageUpload,
      }));
    }
  };

  const handleOnSubmit = () => {
    onSubmit({
      callback: (fieldErrors: ErrorState) => setInputErrors(fieldErrors),
    });
  };

  return (
    <Paper className="overview-paper">
      <ColumnFlex gap="40px">
        <Typography variant="h3">{Details}</Typography>

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
          </StyledColumnFlex>

          <StyledColumnFlex>
            <Input
              label="Language*"
              errorMessage={inputErrors.language}
              value={book.language}
              onChange={(value: string) =>
                handleInputChange(value, BookValue.language)
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

            <ImageUploader
              onImageChange={handleImageChange}
              errorMessage={inputErrors.image}
              image={book.image}
            />
          </StyledColumnFlex>
        </StyleFlex>

        <AlignedFlex gap="20px">
          <Typography variant="h3">{Units}</Typography>
          <StyledAddFab color="primary" onClick={handleAddBookLibrary}>
            <AddIcon />
          </StyledAddFab>
        </AlignedFlex>

        <ColumnFlex gap="20px">
          {book.bookLibraries.map((item: BookLibrariesState, index) => (
            <BooksUnits
              key={index}
              bookLibrary={item}
              libraries={libraries}
              onChange={(value: string, field: BookLibrariesValues) =>
                handleBookLibrariesChange(value, field, index)
              }
              onRemoveClick={() => handleRemoveBookLibrary(index)}
              error={
                (inputErrors.bookLibraries &&
                  inputErrors.bookLibraries[index]) ||
                {}
              }
            />
          ))}
        </ColumnFlex>
      </ColumnFlex>

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
