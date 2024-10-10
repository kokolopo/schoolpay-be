import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class features extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        feature_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "features",
        // schema: "public",
        timestamps: true,
        underscored: true,
        paranoid: true,
        indexes: [
          {
            name: "features_pkey",
            unique: true,
            fields: [{ name: "feature_id" }],
          },
        ],
      }
    );
  }
}
