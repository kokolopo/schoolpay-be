import express from "express";

import { verifyIsSuperAdmin } from "../middleware/verify_token.js";
import manageController from "../controller/manage_controller.js";

const manages = express.Router();

manages.post("/users/roles", verifyIsSuperAdmin, manageController.AddRole);
manages.get("/users/roles", verifyIsSuperAdmin, manageController.GetRoles);
manages.get(
  "/users/roles/:role_id",
  verifyIsSuperAdmin,
  manageController.GetRolebyID
);
manages.post(
  "/users/accesses/:role_id/:feature_id",
  manageController.addAccess
);

export default manages;
