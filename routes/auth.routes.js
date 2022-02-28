import express from "express";
const authRouter = express.Router();
import { createUser } from "../controllers/user.controller.js";

authRouter.post("/usernew", createUser);

export default authRouter;