import express from "express";
import verifyToken from "../middleware/verifyToken";
import { sendMessage, allMessages } from "../controllers/messageController.js";

const router = express.Router();

router.post("/", verifyToken, sendMessage);
router.get("/:chatId", verifyToken, allMessages);

export default router;
