import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/user-controller";

const userRouter = Router();

// Define routes
userRouter.post("/", createUser);
userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export { userRouter };
