import Input from "@/components/Input";
import { useState } from "react";
import { useSearchParams } from "@remix-run/react";
import { OrdersCustomersProps } from "~/types/Orders.type";
import Flex from "@/components/Flex";

const OrdersCustomers: React.FC<OrdersCustomersProps> = ({
  setOrder,
  order,
  customer,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const email = searchParams.get("email") || "";

  const [search, setSearch] = useState<string>(email);

  return (
    <Flex>
      <Input
        value={search}
        placeholder="Search for customer"
        onChange={(value: string) => setSearch(value)}
      />
    </Flex>
  );
};

export default OrdersCustomers;
