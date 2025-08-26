import { User } from "@/types/user";
import { nextServer } from "./api";

export type RegisterRequest = {
  email: string;
  password: string;
};
type CheckSessionRequest = {
  success: boolean;
};

export async function registerUser(data: RegisterRequest): Promise<User> {
  const response = await nextServer.post(`/auth/register`, data);
  return {
    ...response.data,
  };
}

export async function loginUser(data: RegisterRequest): Promise<User> {
  const response = await nextServer.post(`/auth/login`, data);
  return {
    ...response.data,
  };
}
export const getMe = async () => {
  const { data } = await nextServer.get<User>("/users/me");
  return data;
};

export const checkSession = async () => {
  const res = await nextServer.get<CheckSessionRequest>("/auth/session");
  return res.data.success;
};
export const logout = async (): Promise<void> => {
  await nextServer.post("/auth/logout");
};
