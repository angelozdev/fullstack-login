import { NextFunction, Request, Response } from "express";
import { loginSchema } from "./validators";
import { badRequest } from "@hapi/boom";
import { ZodError } from "zod";

export function validateLoginFields(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    loginSchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError)
      return next(badRequest("Invalid request body", error.errors));

    next(badRequest("Invalid request body"));
  }
}
