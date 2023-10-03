import { getSession } from "./session.server";
import { LoginState } from "~/types/Login.type";
import bcrypt from "bcryptjs";
import prisma from "prisma";
import { ErrorSubmit, WrongLoginData } from "~/components/Login/Login.const";
import {
  ErrorChangePassword,
  ErrorCreate,
  ErrorGetSingle,
  ErrorUpdate,
  NewReaderSubject,
} from "~/components/Readers/Readers.const";
import {
  ReaderState,
  ReaderIdProps,
  PasswordState,
} from "~/types/Readers.type";
import { fromSingleReaderResponse } from "~/transformers/readers.transformer";
import { sendEmail } from "./mail.server";
import { NewReader2Email } from "@/templates/NewReader2.email";

export const getReaderSession = (request: Request) => {
  return getSession(request.headers.get("Cookie"));
};

export const getReaderId = async (request: Request) => {
  const session = await getReaderSession(request);
  const readerId = session.get("readerId");

  return readerId;
};

export const login = async ({ email, password }: LoginState) => {
  try {
    const reader = await prisma.readers.findFirst({
      where: { email, deleted: false },
      select: {
        id: true,
        password: true,
      },
    });

    if (!reader) throw new Error(WrongLoginData);

    const isCorrectPassword = await bcrypt.compare(password, reader.password);

    if (!isCorrectPassword) throw new Error(WrongLoginData);

    return { id: reader.id };
  } catch (err: any) {
    throw new Error(err.message || ErrorSubmit);
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
  password,
  email,
  phone,
  birthdate,
}: Omit<ReaderState, "password"> & { password: string }) => {
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

    const cryptPassword = await bcrypt.hash(password, 10);

    const reader = await prisma.readers.create({
      data: {
        name,
        cityId: city,
        address,
        email,
        phone,
        password: cryptPassword,
        birthdate,
      },
    });

    if (!reader) throw new Error(ErrorCreate);

    const data = { reader: name };

    await sendEmail({
      to: email,
      subject: NewReaderSubject,
      template: NewReader2Email(data),
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

export const changePassword = async ({
  readerId,
  oldPassword,
  newPassword,
}: PasswordState & { readerId: string }) => {
  try {
    if (oldPassword === newPassword) throw new Error(ErrorChangePassword);

    const reader = await prisma.readers.findFirst({
      where: { id: readerId, deleted: false },
      select: {
        id: true,
        password: true,
      },
    });

    if (!reader) throw new Error(ErrorChangePassword);

    const isCorrectPassword = await bcrypt.compare(
      oldPassword,
      reader.password
    );

    if (!isCorrectPassword) throw new Error(ErrorChangePassword);

    const cryptPassword = await bcrypt.hash(newPassword, 10);

    const updatedReader = await prisma.readers.updateMany({
      where: {
        id: readerId,
        deleted: false,
      },
      data: {
        password: cryptPassword,
      },
    });

    if (!updatedReader) throw new Error(ErrorChangePassword);

    return updatedReader;
  } catch (err) {
    throw new Error(ErrorChangePassword);
  }
};
