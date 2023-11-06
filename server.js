import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./Routes/userRoutes.js"
import productRoutes from "./Routes/productRoutes.js";
import commentRoutes from "./Routes/commentRoute.js";
import sponsorRoutes from "./Routes/sponsorRoutes.js"
import newsRoutes from "./Routes/newsRoutes.js"
import contactRoutes from "./Routes/contactRoutes.js";
import treeRoutes from "./Routes/treeRoutes.js";

const app = express();
// loading all .env file here
dotenv.config();
// allow which client should have access to our server
app.use(cors());
// changing JsonString to Js Object and back
app.use(express.json());

// Middleware to parse cookies
app.use(cookieParser());
// routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/comments", commentRoutes);
app.use('/api/sponsors',sponsorRoutes)
app.use('/api/news',newsRoutes)
app.use('/api/contacts', contactRoutes)
app.use('/api/trees', treeRoutes)

// connecting to database
mongoose
  .connect(`${process.env.DB_CONNECTION}`)
  .then(() => {
    console.log("Database connected..!");
  })
  .catch((error) => {
    console.log("Failed to connect :", error.message);
  });

app.listen(process.env.SERVER_PORT, () => {
  console.log("Server is listening...");
});
