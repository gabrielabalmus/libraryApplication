import { getSession } from "./session.server";

export const getUserSession = (request: Request) => {
  return getSession(request.headers.get("Cookie"));
};

export const getUserId = async (request: Request) => {
  const session = await getUserSession(request);
  const userId = session.get("userId");

  return userId;
};
