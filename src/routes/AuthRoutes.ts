import express from "express";
import { checkSchema } from "express-validator";
import { CreateUserValidator } from "../validators/User/CreateUserValidator";
import { login, register } from "../controllers/AuthController";
import { LoginValidator } from "../validators/User/LoginValidator";

const router = express.Router();

router.post("/register", checkSchema(CreateUserValidator), register);
router.post("/login", checkSchema(LoginValidator), login);

export { router };
