import express from "express";
import chats from "./data/data.js";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json(chats);
});

app.listen(5000, () => {
  console.log("App listening on port 5000....");
});
