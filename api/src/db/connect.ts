import { JSONFilePreset } from "lowdb/node";
import { IUser } from "../types/user";

async function connect() {
  try {
    const db = await JSONFilePreset<{ users: IUser[] }>("db.json", {
      users: [],
    });
    return db;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export default connect;
