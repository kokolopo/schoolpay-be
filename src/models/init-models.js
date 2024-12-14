import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Accesses from "./Accesses.js";
import _Institutions from "./Institutions.js";
import _features from "./features.js";
import _roles from "./roles.js";
import _users from "./users.js";
import _students from "./students.js";
import _students_detail_school from "./students_detail_school.js";
import _students_detail_family from "./students_detail_family.js";
import _units from "./units.js";

export default function initModels(sequelize) {
  const Accesses = _Accesses.init(sequelize, DataTypes);
  const Institutions = _Institutions.init(sequelize, DataTypes);
  const features = _features.init(sequelize, DataTypes);
  const roles = _roles.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);
  const students = _users.init(sequelize, DataTypes);
  const students_detail_school = _students_detail_school.init(
    sequelize,
    DataTypes
  );
  const students_detail_family = _students_detail_family.init(
    sequelize,
    DataTypes
  );
  const units = _units.init(sequelize, DataTypes);

  roles.belongsTo(Institutions, {
    as: "institution",
    foreignKey: "institution_id",
  });
  Institutions.hasMany(roles, { as: "roles", foreignKey: "institution_id" });
  users.belongsTo(Institutions, {
    as: "institution",
    foreignKey: "institution_id",
  });
  Institutions.hasMany(users, { as: "users", foreignKey: "institution_id" });
  Institutions.hasMany(students, {
    as: "students",
    foreignKey: "institution_id",
  });
  Accesses.belongsTo(features, { as: "feature", foreignKey: "feature_id" });
  features.hasMany(Accesses, { as: "Accesses", foreignKey: "feature_id" });
  Accesses.belongsTo(roles, { as: "role", foreignKey: "role_id" });
  roles.hasMany(Accesses, { as: "Accesses", foreignKey: "role_id" });
  users.belongsTo(roles, { as: "role", foreignKey: "role_id" });
  roles.hasMany(users, { as: "users", foreignKey: "role_id" });

  return {
    Accesses,
    Institutions,
    features,
    roles,
    users,
    students,
    students_detail_school,
    students_detail_family,
    units,
  };
}
