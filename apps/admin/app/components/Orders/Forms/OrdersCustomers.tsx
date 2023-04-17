import Input from "@/components/Input";
import { useEffect, useState } from "react";
import { CustomerState, OrdersCustomersProps } from "~/types/Orders.type";
import { ColumnFlex } from "@/components/Flex";
import Button from "@/components/Button";
import { ButtonType, ButtonVariant } from "@/components/Button/Button.type";
import { Typography } from "@mui/material";
import {
  StyledTable,
  StyledTableColumn,
  StyledRow,
  StyledSearch,
} from "../Orders.style";
import { useFetcher, useParams } from "@remix-run/react";
import FormHelperText from "@mui/material/FormHelperText";
import { isNull } from "lodash";
import {
  customerColumns,
  CustomerPlaceholder,
  MandatoryCustomerEmail,
  NoCustomer,
  Add,
} from "../Orders.const";

const OrdersCustomers: React.FC<OrdersCustomersProps> = ({
  setOrder,
  order,
}) => {
  const fetcher = useFetcher();
  const urlParams = useParams();
  const { customer } = order;

  const [search, setSearch] = useState<string>("");
  const [searchError, setSearchError] = useState<string>("");

  const data = fetcher.data || {};

  useEffect(() => {
    if (data.customer || isNull(data.customer)) {
      setOrder({ ...order, customer: data.customer });
    }
  }, [data.customer]);

  const onCustomerSearch = () => {
    if (!search) {
      setSearchError(MandatoryCustomerEmail);
      return;
    }

    setSearch("");
    fetcher.load(`/orders/${urlParams.orderId || "create"}?email=${search}`);
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
          placeholder={CustomerPlaceholder}
          onChange={onEmailChange}
          errorMessage={searchError}
          width="350px"
        />
        <Button
          type={ButtonType.button}
          title={Add}
          variant={ButtonVariant.contained}
          onClick={onCustomerSearch}
        />
      </StyledSearch>

      <StyledTableColumn>
        <StyledTable>
          <tr>
            {customerColumns.map((item) => (
              <th>{item.value}</th>
            ))}
          </tr>

          <StyledRow>
            {customerColumns.map((item) => (
              <td>
                <Typography variant="h2">
                  {customer && customer[item.name as keyof CustomerState]}
                </Typography>
              </td>
            ))}
          </StyledRow>
        </StyledTable>

        {customer?.deleted && (
          <FormHelperText error={true}>{NoCustomer}</FormHelperText>
        )}
      </StyledTableColumn>
    </ColumnFlex>
  );
};

export default OrdersCustomers;
