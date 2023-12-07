import { Schema, model } from "mongoose";
import User from "./User.js";

const paymentSchema = new Schema({
  sessionId: {
    type: String
  },
  amount: {
    type: Schema.Types.Decimal128,
    required: true,
  },
  currency: {
    type: String,
    default: "EUR",
  },
  status: {
    type: String,
    default: "pending",
  },
  taxRate: {
    type: Schema.Types.Decimal128
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: User,
  }
});

const Payment = model("payment", paymentSchema);

export default Payment;
