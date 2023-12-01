import { Schema, model ,mongoose} from "mongoose";
import User from "./User.js";
import Tree from './Tree.js'


const sponsorshipSchema = new Schema({
    price: { type: Number, required: true },
    certification: { type: String, required: true },
    location: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true },
    treeId: { type: mongoose.Schema.Types.ObjectId, ref: Tree, required: true },

}, { timestamps: true })

const Sponsorship = model('sponsorship', sponsorshipSchema)
export default Sponsorship;