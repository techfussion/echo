import express from "express";
import { searchUser } from "../controllers/user";

router = express.Router();

router.get("/", searchUser);

export default router;
