import Input from "@/components/Input";
import { useEffect, useState } from "react";
import { BookLibraryState, LoansBooksProps } from "~/types/Loans.type";
import { ColumnFlex, SpaceBetweenCenterFlex } from "@/components/Flex";
import Button from "@/components/Button";
import { ButtonType, ButtonVariant } from "@/components/Button/Button.type";
import { Typography } from "@mui/material";
import {
  StyledTable,
  StyledTableColumn,
  StyledRow,
  StyledSearch,
  StyledFormHelperText,
  StyledIconButton,
} from "../Loans.style";
import { useFetcher, useLoaderData, useParams } from "@remix-run/react";
import { isEmpty, isEqual, isNull } from "lodash";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  bookColumns,
  BookPlaceholder,
  MandatoryBookSku,
  NoBook,
  DeletedBook,
  Add,
  DuplicatedBook,
  SameLibrary,
  BookNoLibrary,
} from "../Loans.const";
import Autocomplete from "@/components/Autocomplete";
import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";

const LoansBooks: React.FC<LoansBooksProps> = ({
  setLoan,
  loan,
  error,
  setError,
  disabled = false,
}) => {
  const fetcher = useFetcher();
  const urlParams = useParams();
  const loaderData = useLoaderData();

  const { books } = loan;

  const [search, setSearch] = useState<string>("");
  const [searchError, setSearchError] = useState<string>("");
  const [cities] = useState<AutocompleteOptions[]>(loaderData.cities);
  const [libraries, setLibraries] = useState<AutocompleteOptions[]>(
    loaderData.libraries
  );

  const fetcherData = fetcher.data || {};

  useEffect(() => {
    if (fetcherData.libraries && !isEqual(libraries, fetcherData.libraries))
      setLibraries(fetcherData.libraries);
  }, [fetcherData.libraries]);

  useEffect(() => {
    if (isNull(fetcherData.book)) {
      setSearchError(NoBook);
      return;
    }

    if (fetcherData.book) {
      if (fetcherData.book.library !== loan.library) {
        setSearchError(SameLibrary);
        return;
      }

      setLoan((oldLoad) => ({
        ...oldLoad,
        books: [...oldLoad.books, fetcherData.book],
      }));
      setSearch("");
    }
  }, [fetcherData.book]);

  const onBookSearch = () => {
    if (error.books)
      setError((oldError) => {
        const { books, ...rest } = oldError;
        return rest;
      });

    if (!search) {
      setSearchError(MandatoryBookSku);
      return;
    }

    const duplicate = books.find((item) => item.sku === search);

    if (duplicate) {
      setSearchError(DuplicatedBook);
      return;
    }

    fetcher.load(`/loans/${urlParams.loanId || "create"}?sku=${search}`);
  };

  const onSkuChange = (value: string) => {
    setSearch(value);
    if (searchError) setSearchError("");
  };

  const onBookRemove = (bookId: string) => {
    setLoan((oldLoan) => {
      const newBooksLoan = oldLoan.books.filter((item) => item.id !== bookId);

      return {
        ...oldLoan,
        books: newBooksLoan,
      };
    });
  };

  const onCityChange = (value: AutocompleteOptions | null) => {
    if (disabled) return;

    setLoan((oldLoad) => {
      const { libraryInfo, ...rest } = oldLoad;

      return {
        ...rest,
        city: value?.id || "",
        library: "",
        books: [],
      };
    });

    if (error.city || error.books || error.library)
      setError((oldError) => {
        const { city, books, library, ...rest } = oldError;
        return rest;
      });

    if (searchError) setSearchError("");
    if (search) setSearch("");

    if (value?.id) {
      fetcher.load(`/loans/${urlParams.loanId || "create"}?city=${value.id}`);
      return;
    }

    setLibraries([]);
  };

  const onLibraryChange = (value: AutocompleteOptions | null) => {
    if (disabled) return;

    setLoan((oldLoad) => ({
      ...oldLoad,
      library: value?.id || "",
      books: [],
    }));

    if (searchError) setSearchError("");
    if (search) setSearch("");

    if (error.books || error.library)
      setError((oldError) => {
        const { books, library, ...rest } = oldError;
        return rest;
      });
  };

  const displayErrorMsg = (book: BookLibraryState) => {
    if (book?.deleted)
      return (
        <StyledFormHelperText error={true}>{DeletedBook}</StyledFormHelperText>
      );

    if (loan.library !== book.library)
      return (
        <StyledFormHelperText error={true}>
          {BookNoLibrary}
        </StyledFormHelperText>
      );
  };

  return (
    <ColumnFlex gap="20px">
      <Autocomplete
        onChange={onCityChange}
        options={cities}
        value={loan.city}
        placeholder={"City*"}
        errorMessage={error.city}
        width="200px"
        disabled={disabled}
      />
      {loan.libraryInfo?.deleted ? (
        <Typography variant="h2">
          This loan belonged to <b>{loan.libraryInfo.name}</b>, but this library
          no longer exists
        </Typography>
      ) : (
        loan.city && (
          <Autocomplete
            onChange={onLibraryChange}
            options={libraries}
            value={loan.library}
            errorMessage={error.library}
            placeholder={"Library*"}
            width="200px"
            disabled={disabled}
          />
        )
      )}
      {loan.library && (
        <>
          {!disabled && (
            <StyledSearch>
              <Input
                value={search}
                placeholder={BookPlaceholder}
                onChange={onSkuChange}
                errorMessage={error.books || searchError}
                width="350px"
              />

              <Button
                type={ButtonType.button}
                title={Add}
                variant={ButtonVariant.contained}
                onClick={onBookSearch}
              />
            </StyledSearch>
          )}
          {!isEmpty(books) && (
            <StyledTableColumn>
              <StyledTable>
                <thead>
                  <tr>
                    {bookColumns.map((item, index) => (
                      <th key={index}>{item.value}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {books.map((book, index) => (
                    <>
                      <StyledRow key={index}>
                        {bookColumns.map((column, index) => (
                          <td key={index}>
                            <SpaceBetweenCenterFlex>
                              <Typography variant="h2">
                                {book[column.name as keyof BookLibraryState]}
                              </Typography>

                              {!disabled &&
                                bookColumns.length === index + 1 && (
                                  <StyledIconButton
                                    onClick={() => onBookRemove(book.id)}
                                  >
                                    <DeleteOutlineIcon />
                                  </StyledIconButton>
                                )}
                            </SpaceBetweenCenterFlex>
                          </td>
                        ))}
                      </StyledRow>

                      {displayErrorMsg(book)}
                    </>
                  ))}
                </tbody>
              </StyledTable>
            </StyledTableColumn>
          )}
        </>
      )}
    </ColumnFlex>
  );
};

export default LoansBooks;
