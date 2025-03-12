import { NextFunction, Request, Response } from "express";
import {} from "@hapi/boom";
import { createUserSchema } from "./validators";

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
