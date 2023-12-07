import express from "express";
import {
    createStripePayment, addPayment
} from "../controllers/paymentController.js";
const router = express.Router();

router.post("/checkout", createStripePayment);
router.post("/create",addPayment)

export default router