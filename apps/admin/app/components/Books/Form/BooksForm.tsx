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
  languages,
}) => {
  const navigate = useNavigate();
  const urlParams = useParams();

  const [errors, setErrors] = useState<ErrorState>({});

  const handleInputChange = (value: string, field: BookValue) => {
    setBook((oldBook) => ({ ...oldBook, [field]: value }));

    if (errors[field])
      setErrors((oldErrors) => {
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

    if (errors.bookLibraries && errors.bookLibraries[index][field])
      setErrors((oldErrors) => {
        oldErrors.bookLibraries && delete oldErrors.bookLibraries[index][field];
        return oldErrors;
      });
  };

  const handleAddBookLibrary = () => {
    setBook((oldBook) => ({
      ...oldBook,
      bookLibraries: [...oldBook.bookLibraries, initialBookLibrary],
    }));

    if (!isEmpty(errors.bookLibraries))
      setErrors((oldErrors) => {
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

    if (!isEmpty(errors.bookLibraries))
      setErrors((oldErrors) => {
        delete oldErrors.bookLibraries;
        return oldErrors;
      });
  };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files && e.target.files[0];

      if (!file) {
        setErrors((oldErrors) => ({
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

      if (errors.image)
        setErrors((oldErrors) => {
          const { image, ...rest } = oldErrors;
          return rest;
        });
    } catch (err) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        image: ErrorImageUpload,
      }));
    }
  };

  const handleOnSubmit = () => {
    onSubmit({
      callback: (fieldErrors: ErrorState) => setErrors(fieldErrors),
    });
  };

  return (
    <Paper className="overview-paper">
      <ColumnFlex gap="40px">
        <Typography variant="h3">{Details}</Typography>

        <ColumnFlex gap="20px">
          <StyleFlex>
            <StyledColumnFlex>
              <Input
                label="Name*"
                errorMessage={errors.name}
                value={book.name}
                onChange={(value: string) =>
                  handleInputChange(value, BookValue.name)
                }
              />
              <Input
                label="Author*"
                errorMessage={errors.author}
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
                errorMessage={errors.category}
                options={categories}
                value={book.category}
              />
              <Autocomplete
                label="Publish house*"
                onChange={(value: AutocompleteOptions | null) =>
                  handleInputChange(value?.id || "", BookValue.publishHouse)
                }
                errorMessage={errors.publishHouse}
                options={publishHouses}
                value={book.publishHouse}
              />
              <Input
                label="Release year*"
                type={InputType.number}
                errorMessage={errors.releaseYear}
                value={book.releaseYear}
                onChange={(value: string) =>
                  handleInputChange(value, BookValue.releaseYear)
                }
              />
            </StyledColumnFlex>

            <StyledColumnFlex>
              <Autocomplete
                label="Language*"
                onChange={(value: AutocompleteOptions | null) =>
                  handleInputChange(value?.id || "", BookValue.language)
                }
                errorMessage={errors.language}
                options={languages}
                value={book.language}
              />
              <Input
                label="Pages number*"
                type={InputType.number}
                errorMessage={errors.pagesNumber}
                value={book.pagesNumber}
                onChange={(value: string) =>
                  handleInputChange(value, BookValue.pagesNumber)
                }
              />
              <ImageUploader
                onImageChange={handleImageChange}
                errorMessage={errors.image}
                image={book.image}
              />
            </StyledColumnFlex>
          </StyleFlex>

          <Input
            label="Description*"
            errorMessage={errors.description}
            value={book.description}
            onChange={(value: string) =>
              handleInputChange(value, BookValue.description)
            }
            multiline
          />
        </ColumnFlex>
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
                (errors.bookLibraries && errors.bookLibraries[index]) || {}
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
