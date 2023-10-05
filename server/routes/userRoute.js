import express from "express";
import { searchUser } from "../controllers/userController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, searchUser);

export default router;
