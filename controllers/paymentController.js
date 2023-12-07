import Payment from "../models/Payment.js";
import { StatusCodes } from "http-status-codes";
import { stripeInstance } from "../utils/stripeInstance.js";

export const createStripePayment = async (req, res) => {
    const { cart } = req.body;
    // console.log('CART:', cart)
    const taxRate = await stripeInstance.taxRates.create({
        display_name: "VAT",
        description: "VAT Germany",
        percentage: 19,
        jurisdiction: "DE",
        inclusive: false,
    });
    const trees = cart.map((tree) => ({
        price_data: {
            currency: "eur",
            product_data: {
                name: tree.treeName
            },
            unit_amount: tree.treePrice * 100

        },
        quantity: tree.qty,
        tax_rates: [taxRate.id],
    }));
    try {
        const paymentSession = await stripeInstance.checkout.sessions.create({
            line_items: trees,
            payment_method_types: ["card"],
            mode: "payment",
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel",
        });
        return res.status(StatusCodes.CREATED).json({ id: paymentSession.id })
    } catch (error) {
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ error: error.toString() });
    }
}

export const addPayment = async (req, res) => {
    try {
        const { sessionId, totalGrundPay, userId, taxRate } = req.body;
        const newPayment = await Payment.create({
            sessionId: sessionId,
            amount: totalGrundPay,
            taxRate: taxRate,
            userId: userId,
        });
        return res
            .status(StatusCodes.OK)
            .json({ newPayment });
    } catch (error) {
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: error.toString() });
    }
}