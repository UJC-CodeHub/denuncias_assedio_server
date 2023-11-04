import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { UserService } from "../services/UserService";
import { Role } from "@prisma/client";

export async function createUser(req: Request, res: Response) {
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
