import { model, Schema } from "mongoose";

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: {
        country: { type: String, default: "Germany" },
        state: { type: String },
        city: { type: String, required: true },
        zipCode: { type: Number, required: true },
        address1: { type: String, required: true },
        address2: { type: String }
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobilePhone: { type: String, required: true },
    userType: {
        type: String, required: true, default: "SPONSOR", enum: {
            values: ['ADMIN', 'SPONSOR'],
            message: '{VALUE} is not supported'
        }
    }

}, { timestamps: true });

const User = model('user', userSchema);
export default User;