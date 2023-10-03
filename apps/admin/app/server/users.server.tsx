import { getSession } from "./session.server";
import { LoginState } from "~/types/Login.type";
import bcrypt from "bcryptjs";
import prisma from "prisma";
import { ErrorSubmit, WrongLoginData } from "~/components/Login/Login.const";

export const getUserSession = (request: Request) => {
  return getSession(request.headers.get("Cookie"));
};

export const getUserId = async (request: Request) => {
  const session = await getUserSession(request);
  const userId = session.get("userId");

  return userId;
};

export const login = async ({ email, password }: LoginState) => {
  try {
    const user = await prisma.users.findFirst({
      where: { email },
      select: {
        id: true,
        password: true,
      },
    });

    if (!user) throw new Error(WrongLoginData);

    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isCorrectPassword) throw new Error(WrongLoginData);

    return { id: user.id };
  } catch (err: any) {
    throw new Error(err.message || ErrorSubmit);
  }
};
