import { isBoom } from "@hapi/boom";
import { NextFunction, Request, Response } from "express";

function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (isBoom(err)) {
    const { output, data } = err;
    res.status(output.statusCode).json({
      statusCode: output.statusCode,
      error: output.payload.error,
      message: output.payload.message,
      data,
    });
    return;
  }

  res.status(500).json({
    statusCode: 500,
    error: "Internal Server Error",
    message: err.message,
  });
}

export default errorHandler;
