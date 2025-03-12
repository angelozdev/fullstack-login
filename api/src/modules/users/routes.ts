import express from "express";
import { create, getAll, getOne, update, patch } from "./controllers";
import {
  validateCreateUser,
  validateUpdateUser,
  validatePatchUser,
} from "./middlewares";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", validateCreateUser, create);
router.put("/:id", validateUpdateUser, update);
router.patch("/:id", validatePatchUser, patch);

export default router;
