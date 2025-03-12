import { NextFunction, Request, Response } from "express";
import { connect } from "../../db";
import { notFound, unauthorized } from "@hapi/boom";
import JSONWebToken from "../../libs/jwt";

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const db = await connect();
    const { email, password } = req.body;
    const user = db.data.users.find((user) => user.email === email);
    if (!user) throw notFound("User not found");
    if (user.password !== password) throw unauthorized("Invalid password");

    const token = JSONWebToken.sign({
      id: user._id,
      email: user.email,
    });

    res.json({ token, user });
  } catch (error) {
    next(error);
  }
}
