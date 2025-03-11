import sleep from "~/utils/sleep";

interface ILoginParams {
  username: string;
  password: string;
}

async function login(_: ILoginParams) {
  await sleep(1000);
  const user = {
    _id: "5410953eb0e0c0ae25608277",
    address: "121 National Drive, Cotopaxi, Michigan, 8240",
    age: 30,
    balance: "$3,585.69",
    company: "GEEKNET",
    email: "henderson.briggs@geeknet.net",
    eyeColor: "blue",
    guid: "eab0324c-75ef-49a1-9c49-be2d68f50b96",
    isActive: true,
    name: {
      first: "Henderson",
      last: "Briggs",
    },
    password: "23derd*334",
    phone: "+1 (936) 451-3590",
    picture: "http://placehold.it/32x32",
  };

  return Promise.resolve({ data: user });
}

const services = { login };

export default services;
