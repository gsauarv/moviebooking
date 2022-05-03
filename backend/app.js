import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// routes for users and movies
import userRoutes from "./routes/userRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";

// env config
dotenv.config();

const app = express();
app.use(express.json());
// database url
let dbUrl = process.env.MONGODB_URL;

// connect mongoose to database

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// connection to databsel

let db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));

// get request
app.use(userRoutes);

app.use(movieRoutes);

// server listing on some port

app.listen(3000, () => {
  console.log("Listning on https://localhost:3000");
});
