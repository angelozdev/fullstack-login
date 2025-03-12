import { NextFunction, Request, Response } from "express";
import { connect } from "../../db";
import { notFound, serverUnavailable } from "@hapi/boom";
import JSONWebToken from "../../libs/jwt";

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

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const db = await connect();
    const userIndex = db.data.users.findIndex(
      (user) => user._id === req.params.id
    );

    if (userIndex === -1) throw notFound("User not found");

    db.data.users[userIndex] = req.body;

    db.write();
    res.json(db.data.users[userIndex]);
  } catch (error) {
    next(error);
  }
}

export async function patch(req: Request, res: Response, next: NextFunction) {
  try {
    const db = await connect();
    const userIndex = db.data.users.findIndex(
      (user) => user._id === req.params.id
    );

    if (userIndex === -1) throw notFound("User not found");

    db.data.users[userIndex] = {
      ...db.data.users[userIndex],
      ...req.body,
      name: {
        ...db.data.users[userIndex].name,
        ...(req.body.name || {}),
      },
    };

    await db.write();
    res.json(db.data.users[userIndex]);
  } catch (error) {
    next(error);
  }
}

export async function getLogged(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const db = await connect();
    const authorization = req.headers["authorization"];
    if (!authorization) throw notFound("Authorization header is required");

    const token = authorization.replace("Bearer ", "");
    if (!token) throw notFound("Token is required");

    const { id } = JSONWebToken.decode(token) as any;

    const user = db.data.users.find((user) => user._id === id);

    if (!user) throw notFound("User not found");

    res.json(user);
  } catch (error) {
    next(error);
  }
}
