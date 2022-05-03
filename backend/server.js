import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

import userRoute from "./routes/users.js";
import authRoute from "./routes/auth2.js";

// file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });

// file upoad function
app.post("/api/upload", upload.single("file"), function (req, res) {
  try {
    return res.status(200).json("File upload successfully");
  } catch (err) {
    console.log(err);
  }
});
// ...

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
// app.use("/api/posts", postsRoute);
// app.use("/api/conversation", conversationRoute);
// app.use("/api/message", messageRoute);
app.use(express.static("build"));

dotenv.config();
// mongodb connect
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true, },
  () => {
    console.log("Connect to Mangodb Successfully");
  }
);
// images view
app.use("/images", express.static(path.join(__dirname, "public/images")));

// load the react build file production mode
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(8800, () => {
  console.log("Back end server 8800 is running!");
});
