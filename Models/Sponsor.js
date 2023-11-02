import { Schema,model } from "mongoose";

const sponsorSchema = new Schema({
    dateCreated:{type:Date, default:Date.now},
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    
})

const Sponsor = model('sponsor',sponsorSchema)
export default Sponsor;