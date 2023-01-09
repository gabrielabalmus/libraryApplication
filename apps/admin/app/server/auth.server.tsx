import { LoginState } from "~/components/Login/Login.type";
import bcrypt from "bcryptjs";
import { db } from "./db.server";
import { errorSubmit, wrongLoginData } from "~/const";

export const login = async ({ email, password }: LoginState) => {
  try {
    const user = await db.users.findFirst({
      where: { email, type: "admin" },
      select: {
        id: true,
        password: true,
      },
    });

    if (!user) return new Error(wrongLoginData);

    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isCorrectPassword) return new Error(wrongLoginData);

    return { id: user.id };
  } catch (err) {
    return new Error(errorSubmit);
  }
};
