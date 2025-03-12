import { isBoom, unauthorized } from "@hapi/boom";
import { NextFunction, Request, Response } from "express";
import JSONWebToken from "../libs/jwt";

function jwtTokenHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const authorization = req.headers["authorization"];
    if (!authorization) throw unauthorized("Authorization header is required");

    const token = authorization.replace("Bearer ", "");
    if (!token) throw unauthorized("Token is required");

    JSONWebToken.verify(token);

    next();
  } catch (error) {
    if (isBoom(error)) next(error);
    next(unauthorized("Invalid token"));
  }
}

export default jwtTokenHandler;
