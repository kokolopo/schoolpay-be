import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class units extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        unit_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        institutions_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        status: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
      },
      {
        sequelize,
        tableName: "units",
        schema: "public",
        timestamps: true,
        underscored: true,
        paranoid: true,
        indexes: [
          {
            name: "units_pkey",
            unique: true,
            fields: [{ name: "unit_id" }],
          },
        ],
      }
    );
  }
}
