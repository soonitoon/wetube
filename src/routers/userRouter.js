import express from "express";
import { edit, remove } from "../controllers/videoController";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/remove", remove);

export default userRouter;
