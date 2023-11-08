import { Schema, model } from "mongoose";

const sponsorSchema = new Schema({
    price: { type: String, required: true },
    certification: { type: String, required: true },
    location: { type: String, required: true },
    userId: { type: String, required: true },
    treeId: { type: String, required: true },

}, { timestamps: true })

const Sponsor = model('sponsor', sponsorSchema)
export default Sponsor;