import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class users extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        user_id: {
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
        role_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "roles",
            key: "role_id",
          },
        },
        fullname: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        phone: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        password: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        avatar: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "users",
        // schema: "public",
        timestamps: true,
        underscored: true,
        paranoid: true,
        indexes: [
          {
            name: "users_pkey",
            unique: true,
            fields: [{ name: "user_id" }],
          },
        ],
      }
    );
  }
}
