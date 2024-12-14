import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class students_detail_family extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        student_detail_family_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        student_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        mothers_name: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
        fathers_name: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
        parents_phone: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        fathers_religion: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        fathers_nationality: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        fathers_education: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        fathers_occupation: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        fathers_salary: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        fathers_address: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        fathers_phone: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        fathers_condition: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        mothers_religion: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        mothers_nationality: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        mothers_education: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        mothers_occupation: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        mothers_salary: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        mothers_address: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        mothers_phone: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        mothers_condition: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        guardians_religion: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        guardians_nationality: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        guardians_education: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        guardians_occupation: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        guardians_salary: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        guardians_address: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        guardians_phone: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        guardians_condition: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "students_detail_family",
        schema: "public",
        timestamps: true,
        underscored: true,
        paranoid: true,
        indexes: [
          {
            name: "students_detail_family_pkey",
            unique: true,
            fields: [{ name: "student_detail_family_id" }],
          },
        ],
      }
    );
  }
}
