import Input from "@/components/Input";
import { useEffect, useState } from "react";
import { ReaderState, LoansReaderProps } from "~/types/Loans.type";
import { ColumnFlex } from "@/components/Flex";
import Button from "@/components/Button";
import { ButtonType, ButtonVariant } from "@/components/Button/Button.type";
import { Typography } from "@mui/material";
import {
  StyledTable,
  StyledTableColumn,
  StyledRow,
  StyledSearch,
} from "../Loans.style";
import { useFetcher, useParams } from "@remix-run/react";
import FormHelperText from "@mui/material/FormHelperText";
import { isNull } from "lodash";
import {
  readerColumns,
  ReaderPlaceholder,
  MandatoryReaderEmail,
  NoReader,
  DeletedReader,
  Add,
  DuplicatedReader,
} from "../Loans.const";

const LoansReader: React.FC<LoansReaderProps> = ({
  setLoan,
  loan,
  error,
  setError,
}) => {
  const fetcher = useFetcher();
  const urlParams = useParams();
  const { reader } = loan;

  const [search, setSearch] = useState<string>("");
  const [searchError, setSearchError] = useState<string>("");

  const data = fetcher.data || {};

  useEffect(() => {
    if (isNull(data.reader)) {
      setSearchError(NoReader);
      return;
    }

    if (data.reader) {
      setLoan((oldLoan) => ({ ...oldLoan, reader: data.reader }));
      setSearch("");
    }
  }, [data.reader]);

  const onReaderSearch = () => {
    if (error.reader)
      setError((oldError) => {
        const { reader, ...rest } = oldError;
        return rest;
      });

    if (!search) {
      setSearchError(MandatoryReaderEmail);
      return;
    }

    const duplicate = reader?.email === search;

    if (duplicate) {
      setSearchError(DuplicatedReader);
      return;
    }

    fetcher.load(`/loans/${urlParams.loanId || "create"}?email=${search}`);
  };

  const onEmailChange = (value: string) => {
    setSearch(value);
    if (searchError) setSearchError("");
  };

  return (
    <ColumnFlex gap="20px">
      <StyledSearch>
        <Input
          value={search}
          placeholder={ReaderPlaceholder}
          onChange={onEmailChange}
          errorMessage={error.reader || searchError}
          width="350px"
        />
        <Button
          type={ButtonType.button}
          title={Add}
          variant={ButtonVariant.contained}
          onClick={onReaderSearch}
        />
      </StyledSearch>

      {reader && (
        <StyledTableColumn>
          <StyledTable>
            <thead>
              <tr>
                {readerColumns.map((item, index) => (
                  <th key={index}>{item.value}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <StyledRow>
                {readerColumns.map((item, index) => (
                  <td key={index}>
                    <Typography variant="h2">
                      {reader[item.name as keyof ReaderState]}
                    </Typography>
                  </td>
                ))}
              </StyledRow>

              {reader?.deleted && (
                <FormHelperText error={true}>{DeletedReader}</FormHelperText>
              )}
            </tbody>
          </StyledTable>
        </StyledTableColumn>
      )}
    </ColumnFlex>
  );
};

export default LoansReader;
