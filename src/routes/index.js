import express from "express";
import users from "./users.js";

const routes = express.Router();

routes.use("/users", users);

export default routes;
