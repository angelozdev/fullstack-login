import express from "express";
import {
  create,
  getAll,
  getOne,
  update,
  patch,
  getLogged,
} from "./controllers";
import {
  validateCreateUser,
  validateUpdateUser,
  validatePatchUser,
} from "./middlewares";
import jwtTokenHandler from "../../middlewares/jwt-handler";

const router = express.Router();

router.get("/", jwtTokenHandler, getAll);
router.get("/me", jwtTokenHandler, getLogged);
router.get("/:id", jwtTokenHandler, getOne);
router.post("/", jwtTokenHandler, validateCreateUser, create);
router.put("/:id", jwtTokenHandler, validateUpdateUser, update);
router.patch("/:id", jwtTokenHandler, validatePatchUser, patch);

export default router;
