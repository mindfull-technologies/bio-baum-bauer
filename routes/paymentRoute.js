import express from "express";
import {
    createStripePayment, addPaymentAndSponsorShip
} from "../controllers/paymentController.js";
const router = express.Router();

router.post("/checkout", createStripePayment);
router.post("/create", addPaymentAndSponsorShip)

export default router