import dotenv from "dotenv";
dotenv.config();

import Sequelize from "sequelize";

// Passing a connection URI
// const sequelize = new Sequelize(process.env.DATABASE_URL);

// Connection string dengan SSL
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      require: true, // Enforce SSL
      rejectUnauthorized: false, // Sesuaikan jika ingin verifikasi sertifikat server
    },
  },
  logging: false, // Optional: Matikan logging jika tidak diperlukan
});

export default sequelize;
