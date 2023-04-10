import {
  ErrorCreate,
  ErrorDelete,
  ErrorGetPaginated,
  ErrorGetSingle,
  ErrorUpdate,
} from "~/components/Customers/Customers.const";
import {
  PaginatedCustomersProps,
  CustomerState,
  CustomerIdProps,
} from "~/types/Customers.type";
import {
  fromPaginatedCustomersResponse,
  fromSingleCustomerResponse,
} from "~/transformers/customers.transformer";
import { prisma } from "./prisma.server";
import { ErrorMessage } from "~/const";
import bcrypt from "bcryptjs";
import generator from "generate-password";

export const getPaginatedCustomers = async ({
  page,
  search,
  city,
}: PaginatedCustomersProps) => {
  try {
    const skip = (page > 1 && (page - 1) * 5) || undefined;

    const customers = await prisma.$transaction(async (db) => {
      const count = await db.customers.count({
        where: {
          deleted: false,
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
            { email: { contains: search } },
            { phone: { contains: search } },
          ],
          city: {
            name: {
              contains: city,
              mode: "insensitive",
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      const data = await db.customers.findMany({
        skip,
        take: 5,
        where: {
          deleted: false,
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
            { email: { contains: search } },
            { phone: { contains: search } },
          ],
          city: {
            name: {
              contains: city,
              mode: "insensitive",
            },
          },
        },
        select: {
          id: true,
          name: true,
          city: {
            select: {
              name: true,
            },
          },
          email: true,
          phone: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      if (!data) throw new Error(ErrorGetPaginated);

      return { count, data: fromPaginatedCustomersResponse(data) };
    });

    return customers;
  } catch (err) {
    throw new Error(ErrorGetPaginated);
  }
};

export const getSingleCustomer = async ({ customerId }: CustomerIdProps) => {
  try {
    const customer = await prisma.customers.findFirst({
      where: {
        id: customerId,
        deleted: false,
      },
      select: {
        name: true,
        city: {
          select: {
            id: true,
          },
        },
        address: true,
        email: true,
        phone: true,
      },
    });

    if (!customer) throw new Error(ErrorGetSingle);

    return fromSingleCustomerResponse(customer);
  } catch (err) {
    throw new Error(ErrorGetSingle);
  }
};

export const createCustomer = async ({
  name,
  city,
  address,
  email,
  phone,
}: CustomerState) => {
  try {
    const generatePass = generator.generate({
      length: 10,
      numbers: true,
    });

    const password = await bcrypt.hash(generatePass, 10);

    const customer = await prisma.customers.create({
      data: {
        name,
        cityId: city,
        address,
        email,
        phone,
        password,
        deleted: false,
      },
    });

    if (!customer) throw new Error(ErrorCreate);

    return customer;
  } catch (err) {
    throw new Error(ErrorCreate);
  }
};

export const updateCustomer = async ({
  customerId,
  name,
  city,
  address,
  email,
  phone,
}: CustomerState & { customerId: string }) => {
  try {
    const customer = await prisma.customers.updateMany({
      where: {
        id: customerId,
        deleted: false,
      },
      data: {
        name,
        cityId: city,
        address,
        email,
        phone,
      },
    });

    if (!customer) throw new Error(ErrorUpdate);

    return customer;
  } catch (err) {
    throw new Error(ErrorUpdate);
  }
};

export const deleteCustomer = async ({ customerId }: CustomerIdProps) => {
  try {
    const customer = await prisma.customers.update({
      where: {
        id: customerId,
      },
      data: {
        deleted: true,
      },
    });

    if (!customer) throw new Error(ErrorDelete);

    return customer;
  } catch (err) {
    throw new Error(ErrorDelete);
  }
};

export const getCustomerOrders = async ({ customerId }: CustomerIdProps) => {
  try {
    const customerOrders = await prisma.orders.findMany({
      where: { customerId, deleted: false },
      select: {
        id: true,
      },
    });

    if (!customerOrders) throw new Error(ErrorMessage);

    return customerOrders;
  } catch (err) {
    throw new Error(ErrorMessage);
  }
};
