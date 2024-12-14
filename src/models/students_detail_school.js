import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class students_detail_school extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        student_detail_school_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        student_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        class_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        unit_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        room_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        nis: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        nisn: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        password: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        school_from: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
        certificate_date: {
          type: DataTypes.DATEONLY,
          allowNull: true,
        },
        certificate_number: {
          type: DataTypes.STRING(30),
          allowNull: true,
        },
        study_long: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        school_prev: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
        reason_move: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
        acc_in_class: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
        acc_in_group: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
        acc_in_major: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
        acc_date: {
          type: DataTypes.DATEONLY,
          allowNull: true,
        },
        leave_school_date: {
          type: DataTypes.DATEONLY,
          allowNull: true,
        },
        leave_school_reason: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
        study_end_date: {
          type: DataTypes.DATEONLY,
          allowNull: true,
        },
        last_study_certificate_number: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        continue_to: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
        first_time_work: {
          type: DataTypes.DATEONLY,
          allowNull: true,
        },
        company_name: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
        salary: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "students_detail_school",
        schema: "public",
        timestamps: true,
        underscored: true,
        paranoid: true,
        indexes: [
          {
            name: "students_detail_school_pkey",
            unique: true,
            fields: [{ name: "student_detail_school_id" }],
          },
        ],
      }
    );
  }
}
