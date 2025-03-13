import express from "express";
import morgan from "morgan";
import { usersRouter } from "./modules/users";
import { errorHandler } from "./middlewares";
import { authRouter } from "./modules/auth";
import cors from "cors";

const app = express();

app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api/v1/users", usersRouter);
app.use("/api", authRouter);
app.use(errorHandler);

app.listen(process.env.PORT || 3000, async () => {
  console.log("Server is running on port 3000");
});
