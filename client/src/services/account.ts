import axios from "~/libs/axios";
import { IUser } from "~/types/user";

interface ILoginParams {
  email: string;
  password: string;
}

interface ILoginResponse {
  token: string;
  user: IUser;
}

async function login({ password, email }: ILoginParams) {
  const { data } = await axios.post<ILoginResponse>("/login", {
    password,
    email,
  });
  return data;
}

const services = { login };

export default services;
