export interface CreateSession {
  request: Request;
  userId: string;
  redirectTo: string;
}

export interface AlertDataState {
  message: string;
  success: boolean;
}
