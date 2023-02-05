import { LoginState } from "~/components/Login/Login.type";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma.server";
import { ErrorSubmit, WrongLoginData } from "~/const";

export const login = async ({ email, password }: LoginState) => {
  try {
    const user = await prisma.users.findFirst({
      where: { email, type: "admin" },
      select: {
        id: true,
        password: true,
      },
    });

    if (!user) throw new Error(WrongLoginData);

    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isCorrectPassword) throw new Error(WrongLoginData);

    return { id: user.id };
  } catch (err) {
    throw new Error(ErrorSubmit);
  }
};
