import { Schema, model } from "mongoose";

const paymentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: "usd",
  },
  status: {
    type: String,
    default: "pending",
  },
});

const Payment = model("Payment", paymentSchema);

export default Payment;
