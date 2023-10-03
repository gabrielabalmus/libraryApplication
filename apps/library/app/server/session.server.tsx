import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { CreateSession } from "~/types/Session.type";
import { getReaderSession } from "./readers.server";

export const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "library_session",
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
      secrets: [process.env.LIBRARY_COOKIE_SECRET || ""],
      secure: true,
    },
  });

export const createReaderSession = async ({
  request,
  readerId,
  redirectTo,
}: CreateSession) => {
  const session = await getReaderSession(request);

  session.set("readerId", readerId);

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

export const removeReaderSession = async (request: Request) => {
  const session = await getReaderSession(request);

  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};
