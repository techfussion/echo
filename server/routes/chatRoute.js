import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  expellFromGroup,
  addToGroup,
} from "../controllers/chatController.js";

const router = express.Router();

router.post("/", verifyToken, accessChat).get(verifyToken, fetchChats);
router.post("/new-group", verifyToken, createGroupChat);
router.put("/rename-group", verifyToken, renameGroup);
router.put("/remove-paticipant", verifyToken, expellFromGroup);
router.put("/add-paticipant", verifyToken, addToGroup);

export default router;
