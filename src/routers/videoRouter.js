import express from "express";
import { see, edit } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id", see);
videoRouter.get("/edit", edit);

export default videoRouter;
