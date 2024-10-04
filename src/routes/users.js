import express from "express";
import usersController from "../controller/users_controller.js";
import {
  validateRequestLogin,
  validateRequestRegistration,
} from "../utility/validations.js";
import { verifyToken } from "../middleware/verify_token.js";

const users = express.Router();

users.get("", verifyToken, usersController.getAll);
users.post(
  "/registration",
  validateRequestRegistration,
  usersController.userRegister
);
users.post("/login", validateRequestLogin, usersController.userLogin);
export default users;
