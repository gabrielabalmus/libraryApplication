import Paper from "@mui/material/Paper";
import Input from "@/components/Input";
import { useState } from "react";
import { useNavigate, useParams } from "@remix-run/react";
import {
  ErrorState,
  CustomersFormProps,
  CustomerValue,
} from "~/types/Customers.type";
import Button from "@/components/Button";
import { ButtonType, ButtonVariant } from "@/components/Button/Button.type";
import { StyledFlexButton } from "~/components/Libraries/Libraries.style";
import Autocomplete from "@/components/Autocomplete";
import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import { StyledColumnFlex, StyleFlex } from "~/components/Books/Books.style";
import { Details } from "../Customers.const";
import { ColumnFlex } from "@/components/Flex";
import Typography from "@mui/material/Typography";

const CustomersForm: React.FC<CustomersFormProps> = ({
  onSubmit,
  setCustomer,
  customer,
  cities,
}) => {
  const navigate = useNavigate();
  const urlParams = useParams();

  const [inputErrors, setInputErrors] = useState<ErrorState>({});

  const handleInputChange = (value: string, field: CustomerValue) => {
    setCustomer((oldCustomer) => ({ ...oldCustomer, [field]: value }));

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
      <ColumnFlex gap="40px">
        <Typography variant="h3">{Details}</Typography>

        <StyleFlex>
          <StyledColumnFlex>
            <Input
              label="Name*"
              errorMessage={inputErrors.name}
              value={customer.name}
              onChange={(value: string) =>
                handleInputChange(value, CustomerValue.name)
              }
              width="350px"
            />
            <Input
              label="Email*"
              errorMessage={inputErrors.email}
              value={customer.email}
              onChange={(value: string) =>
                handleInputChange(value, CustomerValue.email)
              }
              width="350px"
              multiline
            />
            <Autocomplete
              label="City*"
              onChange={(value: AutocompleteOptions | null) =>
                handleInputChange(value?.id || "", CustomerValue.city)
              }
              errorMessage={inputErrors.city}
              options={cities}
              value={customer.city}
              width="350px"
            />
          </StyledColumnFlex>

          <StyledColumnFlex>
            <Input
              label="Address*"
              errorMessage={inputErrors.address}
              value={customer.address}
              onChange={(value: string) =>
                handleInputChange(value, CustomerValue.address)
              }
              width="350px"
              multiline
            />
            <Input
              label="Phone*"
              errorMessage={inputErrors.phone}
              value={customer.phone}
              onChange={(value: string) =>
                handleInputChange(value, CustomerValue.phone)
              }
              width="350px"
            />
          </StyledColumnFlex>
        </StyleFlex>
      </ColumnFlex>

      <StyledFlexButton>
        <Button
          title="Cancel"
          variant={ButtonVariant.outlined}
          onClick={() => navigate("/customers")}
        />
        <Button
          type={ButtonType.submit}
          title={urlParams.customerId ? "Update" : "Create"}
          variant={ButtonVariant.contained}
          onClick={handleOnSubmit}
        />
      </StyledFlexButton>
    </Paper>
  );
};

export default CustomersForm;
