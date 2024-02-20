import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/posts.js";
import cors from "cors";

dotenv.config();
const server = express();

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', ()=> console.log("Connected to the database"));

server.use(cors());
server.use(express.json());
server.use('/posts', router);

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=> console.log(`Server running on Port ${PORT}`));
