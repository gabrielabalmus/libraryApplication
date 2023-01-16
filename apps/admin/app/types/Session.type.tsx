export interface CreateSession {
  request: Request;
  userId: string;
  redirectTo: string;
}

export interface RemoveSession {
  request: Request;
  redirectTo: string;
}
