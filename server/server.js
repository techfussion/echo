import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import dbConnection from "./config/dbConnection.js";
import authRoutes from "./routes/authRoute.js";
import userRoutes from "./routes/userRoute.js";
import chatRoutes from "./routes/chatRoute.js";
import messageRoutes from "./routes/messageRoute.js";
import invalidRoute from "./middleware/invalidRoute.js";
import erroHandlerMiddleware from "./middleware/errorHandler.js";

const app = express();

/* CONFIGURATIONS AND MIDDLEWARE*/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
app.use(erroHandlerMiddleware);

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
app.use(invalidRoute);

/* MONGOOSE CONNECTION AND SERVER */
const PORT = process.env.PORT || 5400;

const start = async () => {
  try {
    await dbConnection();

    app.listen(PORT, () => {
      console.log(`Connection Established. Sever port: ${PORT}...`);

      /* POPULATE DB WITH DUMMY USERS ONCE FOR TESTING */
      // User.insertMany(users);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
