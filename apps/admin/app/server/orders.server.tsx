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
  EachOrderProduct,
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
              products: {
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
          products: {
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
              products: {
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
          products: {
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
        products: {
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

const forEachOrderProduct = async ({
  orderProducts,
  orderId,
}: EachOrderProduct) => {
  const newProducts = orderProducts.map((item) => ({
    bookLibraryId: item.id,
    orderId,
  }));

  const deleteOrderProducts = await prisma.orderProducts.deleteMany({
    where: {
      orderId,
    },
  });

  if (!deleteOrderProducts) throw new Error(ErrorMessage);

  const createdOrderProducts = await prisma.orderProducts.createMany({
    data: newProducts,
  });

  if (!createdOrderProducts) throw new Error(ErrorMessage);
};

export const createOrder = async ({
  customer,
  products,
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

    await forEachOrderProduct({ orderProducts: products, orderId: order.id });

    return order;
  } catch (err) {
    throw new Error(ErrorCreate);
  }
};

export const updateOrder = async ({
  orderId,
  customer,
  products,
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

    await forEachOrderProduct({ orderProducts: products, orderId });

    return order;
  } catch (err) {
    throw new Error(ErrorUpdate);
  }
};

export const deleteOrder = async ({ orderId }: OrderIdProps) => {
  try {
    const orderProducts = await prisma.orderProducts.deleteMany({
      where: {
        orderId,
      },
    });

    if (!orderProducts) throw new Error(ErrorDelete);

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
