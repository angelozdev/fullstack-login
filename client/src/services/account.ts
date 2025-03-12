import axios from "~/libs/axios";
import { IUser } from "~/types/user";

interface ILoginParams {
  email: string;
  password: string;
}

interface ILoginResponse {
  token: string;
  userId: string;
}

async function login({ password, email }: ILoginParams) {
  const { data } = await axios.post<ILoginResponse>("/login", {
    password,
    email,
  });
  return data;
}

async function getLoggedUser(token?: string | null) {
  const { data } = await axios.get<IUser>("/v1/users/me", {
    headers: { Authorization: token ? `Bearer ${token}` : "" },
  });
  return data;
}

const accountServices = { login, getLoggedUser };

export default accountServices;
