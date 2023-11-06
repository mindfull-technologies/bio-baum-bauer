import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRoute from "./Routes/userRoutes.js"
import contactRoute from "./Routes/contactRoutes.js"


const app = express();
// loading all .env file here
dotenv.config();
// allow which client should have access to our server
app.use(cors());
// changing JsonString to Js Object and back
app.use(express.json())

// Middleware to parse cookies
app.use(cookieParser());
// routes
app.use('/api/user', userRoute)
app.use('/api/contact', contactRoute)


// connecting to database
mongoose.connect(`${process.env.DB_CONNECTION}`).then(() => {
    console.log("Database connected..!");
}).catch(error => {
    console.log("Failed to connect :", error.message);
})

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server is listening...");
});