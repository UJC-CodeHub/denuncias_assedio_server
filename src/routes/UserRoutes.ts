import express from "express";
import { checkSchema } from "express-validator";
import { CreateUserValidator } from "../validators/User/CreateUserValidator";
import { createUser } from "../controllers/UserController";

const router = express.Router();

router.post("", checkSchema(CreateUserValidator), createUser);

export { router };
