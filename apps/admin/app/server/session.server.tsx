import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { CreateSession } from "~/types/Session.type";
import { getUserSession } from "./users.server";

export const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "session",
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
      secrets: ["s3cret1"],
      secure: true,
    },
  });

export const createUserSession = async ({
  request,
  userId,
  redirectTo,
}: CreateSession) => {
  const session = await getUserSession(request);

  session.set("userId", userId);

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

export const removeUserSession = async (request: Request) => {
  const session = await getUserSession(request);

  return redirect("/login", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};
