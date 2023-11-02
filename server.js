import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./Routes/userRoutes.js"
import sponsorRoute from './Routes/sponsorRoutes.js'
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
// app.use('/api/product', producRoute)
app.use('/api/sponsors',sponsorRoute)


// connecting to database
mongoose.connect(`${process.env.DB_CONNECTION}`).then(() => {
    console.log("Database connected..!");
}).catch(error => {
    console.log("Failed to connect :", error.message);
})

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server is listening...");
});