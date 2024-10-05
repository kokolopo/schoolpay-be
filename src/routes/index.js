import express from "express";
import users from "./users.js";
import manages from "./manage.js";

const routes = express.Router();

routes.use("/users", users);
routes.use("/manages", manages);

export default routes;
