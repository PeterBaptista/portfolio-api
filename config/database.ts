import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "your_database_name", // DB Name
  process.env.DB_USER || "admin", // DB User
  process.env.DB_PASSWORD || "password", // DB Password
  {
    host: process.env.DB_HOST || "localhost", // Docker container runs on localhost
    port: Number(process.env.DB_PORT) || 5432, // PostgreSQL default port
    dialect: "postgres", // Specify the database dialect
    logging: false, // Disable logging for cleaner output
  }
);

export default sequelize;
