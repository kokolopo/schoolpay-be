import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Accesses from  "./Accesses.js";
import _Institutions from  "./Institutions.js";
import _features from  "./features.js";
import _roles from  "./roles.js";
import _users from  "./users.js";

export default function initModels(sequelize) {
  const Accesses = _Accesses.init(sequelize, DataTypes);
  const Institutions = _Institutions.init(sequelize, DataTypes);
  const features = _features.init(sequelize, DataTypes);
  const roles = _roles.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  roles.belongsTo(Institutions, { as: "institution", foreignKey: "institution_id"});
  Institutions.hasMany(roles, { as: "roles", foreignKey: "institution_id"});
  users.belongsTo(Institutions, { as: "institution", foreignKey: "institution_id"});
  Institutions.hasMany(users, { as: "users", foreignKey: "institution_id"});
  Accesses.belongsTo(features, { as: "feature", foreignKey: "feature_id"});
  features.hasMany(Accesses, { as: "Accesses", foreignKey: "feature_id"});
  Accesses.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(Accesses, { as: "Accesses", foreignKey: "role_id"});
  users.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(users, { as: "users", foreignKey: "role_id"});

  return {
    Accesses,
    Institutions,
    features,
    roles,
    users,
  };
}
