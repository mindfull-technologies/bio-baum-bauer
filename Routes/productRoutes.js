import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} from "../Controllers/productController.js";

const router = express.Router();

// Create a new product
router.post("/create", createProduct);

// Get all products
router.get("/", getAllProducts);

// Get a product by ID
router.get("/:id", getProductById);

// Update a product by ID
router.put("/update/:id", updateProductById);

// Delete a product by ID
router.delete("/delete/:id", deleteProductById);

export default router;
