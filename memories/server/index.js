import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import postroute from "./routes/post.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/posts", postroute);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(console.log("DB connection successful"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log("server running on port 5000");
});
