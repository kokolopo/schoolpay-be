import express from "express";
import users from "./users.js";
import manages from "./manage.js";
import students from "./students.js";
import files from "./files.js";

const routes = express.Router();

routes.use("/users", users);
routes.use("/manages", manages);
routes.use("/students", students);
routes.use("/files", files);

export default routes;
