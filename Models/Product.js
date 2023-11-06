import { Schema, model } from "mongoose";

const productSchema = new Schema({
  date: { type: Date, default: Date.now },
  name: {
    type: String,
    required: [true, "Product name is required"],
    minlength: [3, "Product name must be at least 3 characters"],
    maxlength: [50, "Product name must be less than 50 characters"],
  },
  description: {
    type: String,
    required: [true, "Product description is required"],
    minlength: [10, "Product description must be at least 10 characters"],
    maxlength: [500, "Product description must be less than 500 characters"],
  },
  category: {
    type: String,
    enum: {
      values: ["fruits", "vegetables"],
      message: "Category is not valid",
    },
    required: [true, "Product category is required"],
  },
  photo: {
    type: String,
    required: [true, "Product photo URL is required"],
  },
});

const Product = model("Product", productSchema);

export default Product;
