import { NextFunction, Request, Response } from "express";
import { connect } from "../../db";
import { notFound, serverUnavailable } from "@hapi/boom";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const db = await connect();
    const users = db.data.users;
    res.json({
      count: users.length,
      results: users,
      next: null,
      previous: null,
    });
  } catch (error) {
    next(serverUnavailable("Database is not available"));
  }
}

export async function getOne(req: Request, res: Response, next: NextFunction) {
  try {
    const db = await connect();
    const user = db.data.users.find((user) => user._id === req.params.id);

    if (!user) throw notFound("User not found");

    res.json(user);
  } catch (error) {
    next(error);
  }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const db = await connect();
    const user = req.body;
    db.data.users.push(user);
    db.write();
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}
