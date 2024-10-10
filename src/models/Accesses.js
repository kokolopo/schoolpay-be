import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class Accesses extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        access_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        feature_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "features",
            key: "feature_id",
          },
        },
        role_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "roles",
            key: "role_id",
          },
        },
      },
      {
        sequelize,
        tableName: "Accesses",
        schema: "public",
        timestamps: true,
        underscored: true,
        paranoid: true,
        indexes: [
          {
            name: "Accesses_pkey",
            unique: true,
            fields: [{ name: "access_id" }],
          },
        ],
      }
    );
  }
}
