import {
  ErrorCreate,
  ErrorDelete,
  ErrorGetPaginated,
  ErrorGetSingle,
  ErrorUpdate,
  NewCustomerSubject,
} from "~/components/Customers/Customers.const";
import {
  PaginatedCustomersProps,
  CustomerState,
  CustomerIdProps,
} from "~/types/Customers.type";
import {
  fromCustomerByEmail,
  fromPaginatedCustomersResponse,
  fromSingleCustomerResponse,
} from "~/transformers/customers.transformer";
import { prisma } from "./prisma.server";
import { ErrorMessage } from "~/const";
import bcrypt from "bcryptjs";
import generator from "generate-password";
import { sendMail } from "./mail.server";
import { NewCustomerMail } from "@/templates/NewCustomer.mail";
import { CustomerByEmailProps } from "~/types/Orders.type";

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
            { email: { contains: search, mode: "insensitive" } },
            { phone: { contains: search, mode: "insensitive" } },
          ],
          city: {
            name: city || undefined,
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
            { email: { contains: search, mode: "insensitive" } },
            { phone: { contains: search, mode: "insensitive" } },
          ],
          city: {
            name: city || undefined,
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
    const customerByEmail = await prisma.customers.findFirst({
      where: {
        email,
        deleted: false,
      },
      select: {
        id: true,
      },
    });

    if (customerByEmail) throw new Error(ErrorCreate);

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
      },
    });

    if (!customer) throw new Error(ErrorCreate);

    await sendMail({
      to: email,
      subject: NewCustomerSubject,
      template: NewCustomerMail,
      data: { password: generatePass },
    });

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
    const customerByEmail = await prisma.customers.findFirst({
      where: {
        email,
        deleted: false,
        id: { not: customerId },
      },
      select: {
        id: true,
      },
    });

    if (customerByEmail) throw new Error(ErrorUpdate);

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
      where: { customerId },
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

export const getCustomerByEmail = async ({ email }: CustomerByEmailProps) => {
  try {
    if (!email) return null;

    const customer = await prisma.customers.findFirst({
      where: {
        deleted: false,
        email,
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
        deleted: true,
      },
    });

    if (!customer) return null;

    return fromCustomerByEmail(customer);
  } catch (err) {
    throw new Error(ErrorMessage);
  }
};
