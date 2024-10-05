import { DataTypes, Model, ModelStatic } from "sequelize";

import sequelize from "../config/database";
type UserType = {
  id: string;
  name: string;
  email?: string;
  password: string;
  role: "admin" | "user";
};

const User: ModelStatic<Model<UserType, UserType>> = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "user"),
      allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

export { User };
