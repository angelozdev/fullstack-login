import axios from "~/libs/axios";

interface ILoginParams {
  email: string;
  password: string;
}

async function login({ password, email }: ILoginParams) {
  const { data } = await axios.post("/login", { password, email });
  return data;
}

const services = { login };

export default services;
