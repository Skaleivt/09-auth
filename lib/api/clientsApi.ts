import { User } from "@/types/user";
import { nextServer } from "./api";

export type RegisterRequest = {
  email: string;
  password: string;
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
  console.log(data);
  return data;
};

export const logout = async (): Promise<void> => {
  await nextServer.post("/auth/logout");
};

type CheckSessionResponse = {
  success: boolean;
};

export const checkServerSession = async () => {
  const res = await nextServer.get<CheckSessionResponse>("/auth/session");
  return res;
};
