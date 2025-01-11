import express from "express";

import { verifyIsSuperAdmin } from "../middleware/verify_token.js";
import filesController from "../controller/files_controller.js";
import { validateImageType } from "../middleware/validate_image_type.js";

const students = express.Router();

students.post("/images", filesController.uploadImage);

export default students;
