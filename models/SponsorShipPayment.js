import { Schema, model } from "mongoose";
import User from "./User.js";

const SponsorShipPaymentSchema = new Schema({
  sessionId: {
    type: String,
  },
  certification: { type: String, default: "" },
  amount: {
    type: Schema.Types.Decimal128,
    required: true,
  },
  currency: {
    type: String,
    default: "EUR",
  },
  taxRate: {
    type: Schema.Types.Decimal128
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: User,
  }
});

const SponsorShipPayment = model("sponsorShipsPayment", SponsorShipPaymentSchema);

export default SponsorShipPayment;
