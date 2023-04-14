import {
  OrdersResponse,
  OrderResponse,
  OrderState,
  PaginatedOrders,
} from "~/types/Orders.type";
import moment from 'moment'

export const fromPaginatedOrdersResponse = (
  orders: OrdersResponse[]
): PaginatedOrders[] =>
  orders.map((item) => ({
    ...item,
    email: item.customer.email,
    createdAt: moment(item.createdAt).format('DD MMM YYYY, HH:mm')
  }));

export const fromSingleOrderResponse = (order: OrderResponse): OrderState => ({
  ...order,
});
