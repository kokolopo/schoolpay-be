import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class roles extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        role_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        institution_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "Institutions",
            key: "institution_id",
          },
        },
        name: {
          type: DataTypes.STRING(25),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "roles",
        schema: "public",
        timestamps: true,
        underscored: true,
        indexes: [
          {
            name: "roles_pkey",
            unique: true,
            fields: [{ name: "role_id" }],
          },
        ],
      }
    );
  }
}
