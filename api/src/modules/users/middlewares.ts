import { NextFunction, Request, Response } from "express";
import {} from "@hapi/boom";
import {
  createUserSchema,
  patchUserSchema,
  updateUserSchema,
  idScheme,
} from "./validators";

export function validateCreateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    createUserSchema.parse(req.body);
    next();
  } catch (error) {
    next(error);
  }
}

export function validateUpdateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    idScheme.parse(req.params.id);
    updateUserSchema.parse(req.body);
    next();
  } catch (error) {
    next(error);
  }
}

export function validatePatchUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    idScheme.parse(req.params.id);
    patchUserSchema.parse(req.body);
    next();
  } catch (error) {
    next(error);
  }
}
