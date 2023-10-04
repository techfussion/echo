import express from "express";
import upload from "../config/fileUpload.js";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", upload.single("picture"), register);

export default router;
