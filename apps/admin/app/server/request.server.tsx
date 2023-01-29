import { json } from "@remix-run/node";

export const badRequest = <T,>(data: T) => json<T>(data, { status: 400 });

export const goodRequest = <T,>(data: T) => json<T>(data, { status: 200 });