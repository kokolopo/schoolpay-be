import express from "express";

import { verifyIsSuperAdmin } from "../middleware/verify_token.js";
import studentController from "../controller/student_controller.js";

const students = express.Router();

students.get("/", studentController.searchByNIS);

export default students;
