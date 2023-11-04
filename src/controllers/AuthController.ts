import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { UserService } from "../services/UserService";
import { Role } from "@prisma/client";
import { generateAccessToken } from "../services/TokenService";

export async function register(req: Request, res: Response) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const existentUser = await UserService.existsByCode(req.body.code);

  if (existentUser) {
    return res
      .status(409)
      .json({ message: "User with this code already exists!" });
  }

  await UserService.createUser({
    code: req.body.code,
    password: req.body.password,
    role: Role.USER,
  });

  return res.status(201).json({
    message: "Success! User was created successfully. Proceed to login",
  });
}

export async function login(req: Request, res: Response) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const user = await UserService.existsByCode(req.body.code);

  if (!user) {
    return res
      .status(404)
      .json({ message: "User with this code doesnt exist!" });
  }

  const isPasswordValid = await Bun.password.verify(
    req.body.password,
    user.password
  );

  if (!isPasswordValid) {
    return res
      .status(401)
      .json({ message: "Incorrect credentials! Please try again" });
  }

  const token = generateAccessToken(req.body.code);

  return res
    .status(200)
    .json({ message: "Login was done successfully!", token: token });
}
