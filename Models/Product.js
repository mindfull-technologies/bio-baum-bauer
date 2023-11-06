import { Schema, model } from "mongoose";

const productSchema = new Schema({
  date: { type: Date, default: Date.now },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["fruits", "vegetables"],
    required: true,
  },
  photo: { type: String, required: true },
});

const Product = model("product", productSchema);

export default Product;
