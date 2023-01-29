import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { CreateSession, RemoveSession } from "~/types/Session.type";
import { getUserSession } from "./users.server";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "session",
      httpOnly: true,
      expires: new Date(Date.now() + 60 * 60 * 24),
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

export const removeUserSession = async ({
  request,
  redirectTo,
}: RemoveSession) => {
  const session = await getUserSession(request);

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};

export { getSession, commitSession, destroySession };
