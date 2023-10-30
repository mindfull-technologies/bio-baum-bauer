import express from "express";
import { getAllUsers } from "../Controllers/UserController.js";
const router = express.Router();

router.get('/all', getAllUsers)

export default router;