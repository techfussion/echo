import express from "express";
import { searchUser } from "../controllers/userController";
import verifyToken from "../middleware/verifyToken";

router = express.Router();

router.get("/", verifyToken, searchUser);

export default router;
