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
import { useFetcher, useParams } from "@remix-run/react";
import { isEmpty, isNull } from "lodash";
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
} from "../Loans.const";

const LoansBooks: React.FC<LoansBooksProps> = ({
  setLoan,
  loan,
  error,
  setError,
}) => {
  const fetcher = useFetcher();
  const urlParams = useParams();
  const { books } = loan;

  const [search, setSearch] = useState<string>("");
  const [searchError, setSearchError] = useState<string>("");

  const data = fetcher.data || {};

  useEffect(() => {
    if (isNull(data.book)) {
      setSearchError(NoBook);
      return;
    }

    if (data.book) {
      const sameLoanLibrary = loan.books.find(
        (item) => item.library === data.book.library
      );

      if (!isEmpty(loan.books) && !sameLoanLibrary) {
        setSearchError(SameLibrary);
        return;
      }

      setLoan((oldLoad) => ({
        ...oldLoad,
        books: [...oldLoad.books, data.book],
      }));
      setSearch("");
    }
  }, [data.book]);

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

  return (
    <ColumnFlex gap="20px">
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

      {!isEmpty(books) && (
        <StyledTableColumn>
          <StyledTable>
            <tr>
              {bookColumns.map((item, index) => (
                <th key={index}>{item.value}</th>
              ))}
            </tr>

            {books.map((book, index) => (
              <>
                <StyledRow key={index}>
                  {bookColumns.map((column, index) => (
                    <td key={index}>
                      <SpaceBetweenCenterFlex>
                        <Typography variant="h2">
                          {book[column.name as keyof BookLibraryState]}
                        </Typography>

                        {bookColumns.length === index + 1 && (
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

                {book?.deleted && (
                  <StyledFormHelperText error={true}>
                    {DeletedBook}
                  </StyledFormHelperText>
                )}
              </>
            ))}
          </StyledTable>
        </StyledTableColumn>
      )}
    </ColumnFlex>
  );
};

export default LoansBooks;
