import express from "express";

import { verifyIsSuperAdmin } from "../middleware/verify_token.js";
import manageController from "../controller/manage_controller.js";

const manages = express.Router();

manages.get("/users", verifyIsSuperAdmin, manageController.getUsers);
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

// units
manages.post("/units/add", verifyIsSuperAdmin, manageController.addUnits);
manages.get("/units", verifyIsSuperAdmin, manageController.fetchUnits);

// Institution
manages.get(
  "/institutions",
  verifyIsSuperAdmin,
  manageController.getInstitutionsData
);
manages.post("/institutions");
export default manages;
