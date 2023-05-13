import {
  ErrorCreate,
  ErrorDelete,
  ErrorGetPaginated,
  ErrorGetSingle,
  ErrorUpdate,
  NewReaderSubject,
} from "~/components/Readers/Readers.const";
import {
  PaginatedReadersProps,
  ReaderState,
  ReaderIdProps,
} from "~/types/Readers.type";
import {
  fromReaderByEmail,
  fromPaginatedReadersResponse,
  fromSingleReaderResponse,
} from "~/transformers/readers.transformer";
import { prisma } from "./prisma.server";
import { ErrorMessage } from "~/const";
import bcrypt from "bcryptjs";
import generator from "generate-password";
import { sendEmail } from "./mail.server";
import { NewReaderEmail } from "@/templates/NewReader.email";
import { ReaderByEmailProps } from "~/types/Loans.type";

export const getPaginatedReaders = async ({
  page,
  search,
  city,
}: PaginatedReadersProps) => {
  try {
    const skip = (page > 1 && (page - 1) * 5) || undefined;

    const readers = await prisma.$transaction(async (db) => {
      const count = await db.readers.count({
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
          city:
            (city && {
              name: city,
            }) ||
            undefined,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      const data = await db.readers.findMany({
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
          city:
            (city && {
              name: city,
            }) ||
            undefined,
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

      return { count, data: fromPaginatedReadersResponse(data) };
    });

    return readers;
  } catch (err) {
    throw new Error(ErrorGetPaginated);
  }
};

export const getSingleReader = async ({ readerId }: ReaderIdProps) => {
  try {
    const reader = await prisma.readers.findFirst({
      where: {
        id: readerId,
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
        birthdate: true,
      },
    });

    if (!reader) throw new Error(ErrorGetSingle);

    return fromSingleReaderResponse(reader);
  } catch (err) {
    throw new Error(ErrorGetSingle);
  }
};

export const createReader = async ({
  name,
  city,
  address,
  email,
  phone,
  birthdate,
}: ReaderState) => {
  try {
    const readerByEmail = await prisma.readers.findFirst({
      where: {
        email,
        deleted: false,
      },
      select: {
        id: true,
      },
    });

    if (readerByEmail) throw new Error(ErrorCreate);

    const generatePass = generator.generate({
      length: 10,
      numbers: true,
    });

    const password = await bcrypt.hash(generatePass, 10);

    const reader = await prisma.readers.create({
      data: {
        name,
        cityId: city,
        address,
        email,
        phone,
        password,
        birthdate,
      },
    });

    if (!reader) throw new Error(ErrorCreate);

    await sendEmail({
      to: email,
      subject: NewReaderSubject,
      template: NewReaderEmail,
      data: { password: generatePass, reader: name },
    });

    return reader;
  } catch (err) {
    throw new Error(ErrorCreate);
  }
};

export const updateReader = async ({
  readerId,
  name,
  city,
  address,
  email,
  phone,
  birthdate,
}: ReaderState & { readerId: string }) => {
  try {
    const readerByEmail = await prisma.readers.findFirst({
      where: {
        email,
        deleted: false,
        id: { not: readerId },
      },
      select: {
        id: true,
      },
    });

    if (readerByEmail) throw new Error(ErrorUpdate);

    const reader = await prisma.readers.updateMany({
      where: {
        id: readerId,
        deleted: false,
      },
      data: {
        name,
        cityId: city,
        address,
        email,
        phone,
        birthdate,
      },
    });

    if (!reader) throw new Error(ErrorUpdate);

    return reader;
  } catch (err) {
    throw new Error(ErrorUpdate);
  }
};

export const deleteReader = async ({ readerId }: ReaderIdProps) => {
  try {
    const reader = await prisma.readers.update({
      where: {
        id: readerId,
      },
      data: {
        deleted: true,
      },
    });

    if (!reader) throw new Error(ErrorDelete);

    return reader;
  } catch (err) {
    throw new Error(ErrorDelete);
  }
};

export const getReaderLoans = async ({ readerId }: ReaderIdProps) => {
  try {
    const readerLoans = await prisma.loans.findMany({
      where: { readerId },
      select: {
        id: true,
      },
    });

    if (!readerLoans) throw new Error(ErrorMessage);

    return readerLoans;
  } catch (err) {
    throw new Error(ErrorMessage);
  }
};

export const getReaderByEmail = async ({ email }: ReaderByEmailProps) => {
  try {
    if (!email) return null;

    const reader = await prisma.readers.findFirst({
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

    if (!reader) return null;

    return fromReaderByEmail(reader);
  } catch (err) {
    throw new Error(ErrorMessage);
  }
};
