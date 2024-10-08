import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import sequelize from "../config/database";
import { userRouter } from "../routes/user-routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use("/users", cors(), userRouter);

// Sync database and start the server
const startServer = async () => {
  try {
    await sequelize.sync();
    console.log("Database synced successfully");
    app.listen(PORT, () => {
      console.log(`Server is running`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
