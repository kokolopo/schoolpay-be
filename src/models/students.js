const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return students.init(sequelize, DataTypes);
};

class students extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        student_id: {
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
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        gender: {
          type: DataTypes.CHAR(8),
          allowNull: false,
        },
        place_of_birth: {
          type: DataTypes.STRING(25),
          allowNull: false,
        },
        date_of_birth: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        hobby: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        phone: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        address: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        nationality: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        childs_birth_order: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        number_of_siblings: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        nik: {
          type: DataTypes.STRING(35),
          allowNull: true,
        },
        no_kk: {
          type: DataTypes.STRING(35),
          allowNull: true,
        },
        status_in_family: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        native_language: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        living_with: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        distance_to_school: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        blood_type: {
          type: DataTypes.CHAR(1),
          allowNull: true,
        },
        history_of_illness: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        religion: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        weight: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        high: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        physical_disability: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        status: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        photo: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "students",
        schema: "public",
        timestamps: true,
        underscored: true,
        paranoid: true,
        indexes: [
          {
            name: "students_pkey",
            unique: true,
            fields: [{ name: "student_id" }],
          },
        ],
      }
    );
  }
}
