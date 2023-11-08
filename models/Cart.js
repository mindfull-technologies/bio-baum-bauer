import {model, Schema} from "mongoose";
import User from "./User.js"
import Tree from "./Tree.js"

const cartItem = new Schema({
    treeId:{type:Schema.Types.ObjectId,ref:Tree ,required:true},
    quantity:{type: Number, required:true}
}); 
// this is the Schema for Cart

const cartSchema = new Schema({
    userId:{type:Schema.Types.ObjectId,ref: User, required:true},
    items:[cartItem]
}); 

const Cart = model("cart", cartSchema);
export default Cart;