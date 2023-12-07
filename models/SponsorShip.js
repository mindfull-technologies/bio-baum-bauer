import { Schema, model, mongoose } from "mongoose";
import User from "./User.js";
import OrderItem from "./OrderItem.js";
import Payment from "./Payment.js";


const sponsorshipSchema = new Schema({
    totalPrice: { type: Schema.Types.Decimal128, required: true },
    certification: { type: String, default: "" },
    userId: { type: Schema.Types.ObjectId, ref: User, required: true },
    items: [{
        type: Schema.Types.ObjectId, ref: OrderItem
    }],
    paymentId: { type: Schema.Types.ObjectId, ref: Payment }

}, { timestamps: true })

const Sponsorship = model('sponsorship', sponsorshipSchema)
export default Sponsorship;