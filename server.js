import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./Routes/userRoutes.js"
import mongoose from "mongoose";

const app = express();
// loading all .env file here
dotenv.config();
// allow which client should have access to our server
app.use(cors());
// changing JsonString to Js Object and back
app.use(express.json())

// routes
app.use('/api/users', userRoute)


// connecting to database
// mongoose.connect();

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server is listening...");
});