import Paper from "@mui/material/Paper";
import { useState } from "react";
import { useNavigate, useParams } from "@remix-run/react";
import { ErrorState, OrdersFormProps } from "~/types/Orders.type";
import Button from "@/components/Button";
import { ButtonType, ButtonVariant } from "@/components/Button/Button.type";
import { StyledFlexButton } from "~/components/Libraries/Libraries.style";
import { Books, Customer } from "../Orders.const";
import { ColumnFlex } from "@/components/Flex";
import Typography from "@mui/material/Typography";
import OrdersCustomers from "./OrdersCustomers";

const OrdersForm: React.FC<OrdersFormProps> = ({
  onSubmit,
  setOrder,
  order,
}) => {
  const navigate = useNavigate();
  const urlParams = useParams();

  const [inputErrors, setInputErrors] = useState<ErrorState>({});

  const handleOnSubmit = () => {
    onSubmit({
      callback: (fieldErrors: ErrorState) => setInputErrors(fieldErrors),
    });
  };

  return (
    <Paper className="overview-paper">
      <ColumnFlex gap="40px" maxWidth="800px">
        <Typography variant="h3">{Customer}</Typography>
        <OrdersCustomers setOrder={setOrder} order={order} />

        <Typography variant="h3">{Books}</Typography>
      </ColumnFlex>

      <StyledFlexButton>
        <Button
          title="Cancel"
          variant={ButtonVariant.outlined}
          onClick={() => navigate("/books")}
        />
        <Button
          type={ButtonType.submit}
          title={urlParams.orderId ? "Update" : "Create"}
          variant={ButtonVariant.contained}
          onClick={handleOnSubmit}
        />
      </StyledFlexButton>
    </Paper>
  );
};

export default OrdersForm;
