import express from "express";
import { login } from "./controllers";
import { validateLoginFields } from "./middlewares";

const router = express.Router();

router.post("/login", validateLoginFields, login);

export default router;
