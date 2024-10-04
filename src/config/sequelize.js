import dotenv from "dotenv";
dotenv.config();

import Sequelize from "sequelize";

// Passing a connection URI
const sequelize = new Sequelize(process.env.DATABASE_URL);

export default sequelize;
