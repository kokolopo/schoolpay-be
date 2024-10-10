import express from "express";

import { verifyIsSuperAdmin } from "../middleware/verify_token.js";
import manageController from "../controller/manage_controller.js";

const manages = express.Router();

manages.post("/users/roles", verifyIsSuperAdmin, manageController.AddRole);
manages.get("/users/roles", verifyIsSuperAdmin, manageController.GetRoles);
manages.get(
  "/users/roles/:role_id",
  verifyIsSuperAdmin,
  manageController.GetRoleByID
);
manages.post(
  "/users/accesses/:role_id/:feature_id",
  verifyIsSuperAdmin,
  manageController.addAccess
);
manages.put(
  "/users/accesses/:role_id/:feature_id",
  verifyIsSuperAdmin,
  manageController.disableEnableAccess
);
manages.get("/features", verifyIsSuperAdmin, manageController.getFeatures);

export default manages;
