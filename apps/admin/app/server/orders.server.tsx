import {
  ErrorCreate,
  ErrorDelete,
  ErrorGetPaginated,
  ErrorGetSingle,
  ErrorUpdate,
} from "~/components/Orders/Orders.const";
import {
  PaginatedOrdersProps,
  OrderState,
  OrderIdProps,
  EachOrderBook,
  CustomerState,
} from "~/types/Orders.type";
import { ErrorMessage } from "~/const";
import {
  fromPaginatedOrdersResponse,
  fromSingleOrderResponse,
} from "~/transformers/orders.transformer";
import { prisma } from "./prisma.server";
import { Status } from "@prisma/client";

export const getPaginatedOrders = async ({
  page,
  search,
  city,
  status,
}: PaginatedOrdersProps) => {
  try {
    const skip = (page && page > 1 && (page - 1) * 5) || undefined;

    const orders = await prisma.$transaction(async (db) => {
      const count = await db.orders.count({
        where: {
          OR: [
            {
              number: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              customer: {
                email: {
                  contains: search,
                  mode: "insensitive",
                },
              },
            },
            {
              books: {
                some: {
                  bookLibrary: {
                    SKU: {
                      contains: search,
                      mode: "insensitive",
                    },
                  },
                },
              },
            },
          ],
          books: {
            some: {
              bookLibrary: {
                library: {
                  city: {
                    name: city || undefined,
                  },
                },
              },
            },
          },
          status: status ? Status[status as Status] : undefined,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      const data = await db.orders.findMany({
        skip,
        take: 5,
        where: {
          OR: [
            {
              number: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              customer: {
                email: {
                  contains: search,
                  mode: "insensitive",
                },
              },
            },
            {
              books: {
                some: {
                  bookLibrary: {
                    SKU: {
                      contains: search,
                      mode: "insensitive",
                    },
                  },
                },
              },
            },
          ],
          books: {
            some: {
              bookLibrary: {
                library: {
                  city: {
                    name: city || undefined,
                  },
                },
              },
            },
          },
          status: status ? Status[status as Status] : undefined,
        },
        select: {
          id: true,
          number: true,
          customer: {
            select: {
              email: true,
            },
          },
          status: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      if (!data) throw new Error(ErrorGetPaginated);

      return { count, data: fromPaginatedOrdersResponse(data) };
    });

    return orders;
  } catch (err) {
    throw new Error(ErrorGetPaginated);
  }
};

export const getSingleOrder = async ({ orderId }: OrderIdProps) => {
  try {
    const order = await prisma.orders.findFirst({
      where: {
        id: orderId,
      },
      select: {
        number: true,
        customer: {
          select: {
            id: true,
            name: true,
            phone: true,
            email: true,
            city: { select: { name: true } },
            deleted: true,
          },
        },
        books: {
          select: {
            bookLibrary: {
              select: {
                id: true,
                book: {
                  select: {
                    id: true,
                    name: true,
                    image: true,
                    author: true,
                    publishHouse: { select: { name: true } },
                    deleted: true,
                  },
                },
                library: {
                  select: {
                    id: true,
                    name: true,
                    phone: true,
                    city: { select: { name: true } },
                    deleted: true,
                  },
                },
                SKU: true,
                place: true,
                deleted: true,
              },
            },
          },
        },
        status: true,
        penalty: true,
        createdAt: true,
      },
    });

    if (!order) throw new Error(ErrorGetSingle);

    return fromSingleOrderResponse(order);
  } catch (err) {
    throw new Error(ErrorGetSingle);
  }
};

const EachOrderBook = async ({
  orderBooks,
  orderId,
}: EachOrderBook) => {
  const newBooks = orderBooks.map((item) => ({
    bookLibraryId: item.id,
    orderId,
  }));

  const deleteOrderBooks = await prisma.orderBooks.deleteMany({
    where: {
      orderId,
    },
  });

  if (!deleteOrderBooks) throw new Error(ErrorMessage);

  const createdOrderBooks = await prisma.orderBooks.createMany({
    data: newBooks,
  });

  if (!createdOrderBooks) throw new Error(ErrorMessage);
};

export const createOrder = async ({
  customer,
  books,
  status,
}: OrderState) => {
  try {
    const lastOrder = await prisma.orders.findFirst({
      take: 1,
      orderBy: {
        createdAt: "desc",
      },
      select: {
        number: true,
      },
    });

    const number = lastOrder
      ? (parseInt(lastOrder.number) + 1).toString()
      : "1";

    const order = await prisma.orders.create({
      data: {
        number,
        status,
        customerId: (customer as CustomerState).id,
      },
    });

    if (!order) throw new Error(ErrorCreate);

    await EachOrderBook({ orderBooks: books, orderId: order.id });

    return order;
  } catch (err) {
    throw new Error(ErrorCreate);
  }
};

export const updateOrder = async ({
  orderId,
  customer,
  books,
  status,
}: OrderState & { orderId: string }) => {
  try {
    const order = await prisma.orders.update({
      where: {
        id: orderId,
      },
      data: {
        status,
        customerId: (customer as CustomerState).id,
      },
    });

    if (!order) throw new Error(ErrorUpdate);

    await EachOrderBook({ orderBooks: books, orderId });

    return order;
  } catch (err) {
    throw new Error(ErrorUpdate);
  }
};

export const deleteOrder = async ({ orderId }: OrderIdProps) => {
  try {
    const orderBooks = await prisma.orderBooks.deleteMany({
      where: {
        orderId,
      },
    });

    if (!orderBooks) throw new Error(ErrorDelete);

    const order = await prisma.orders.deleteMany({
      where: {
        id: orderId,
      },
    });

    if (!order) throw new Error(ErrorDelete);

    return order;
  } catch (err) {
    throw new Error(ErrorDelete);
  }
};
