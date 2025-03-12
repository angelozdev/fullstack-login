import express from "express";
import { create, getAll, getOne } from "./controllers";
import { validateCreateUser } from "./middlewares";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", validateCreateUser, create);

export default router;
