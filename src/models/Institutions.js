import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class Institutions extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        institution_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        address: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        contact: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        image: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "Institutions",
        schema: "public",
        timestamps: true,
        underscored: true,
        paranoid: true,
        indexes: [
          {
            name: "Institutions_pkey",
            unique: true,
            fields: [{ name: "institution_id" }],
          },
        ],
      }
    );
  }
}
