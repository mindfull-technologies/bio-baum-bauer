import { StatusCodes } from "http-status-codes";
import Product from "../Models/Product.js";
import { validationResult } from "express-validator";
import { body } from "express-validator";

// Product Create Validator Middleware
export const productValidationRules = () => {
  return [
    body("name")
      .notEmpty()
      .withMessage("Product name is required.")
      .isString()
      .withMessage("Product name must be a string.")
      .isLength({ min: 3, max: 50 })
      .withMessage("Product name must be between 3 and 50 characters.")
      .trim()
      .escape(),

    body("description")
      .notEmpty()
      .withMessage("Product description is required.")
      .isString()
      .withMessage("Product description must be a string.")
      .isLength({ min: 10, max: 500 })
      .withMessage("Product description must be between 10 and 500 characters.")
      .trim()
      .escape(),

    body("category")
      .notEmpty()
      .withMessage("Product category is required.")
      .isString()
      .withMessage("Product category must be a string.")
      .isIn(["fruits", "vegetables"])
      .withMessage('Product category must be either "fruits" or "vegetables".'),

    body("photo")
      .notEmpty()
      .withMessage("Product photo URL is required.")
      .isString()
      .withMessage("Product photo URL must be a string.")
      .isURL()
      .withMessage("Product photo URL must be a valid URL."),
  ];
};

// Product Update Validator Middleware
export const productUpdateValidationRules = () => {
  return [
    body("name")
      .optional()
      .isString()
      .withMessage("Product name must be a string.")
      .isLength({ min: 3, max: 50 })
      .withMessage("Product name must be between 3 and 50 characters.")
      .trim()
      .escape(),

    body("description")
      .optional()
      .isString()
      .withMessage("Product description must be a string.")
      .isLength({ min: 10, max: 500 })
      .withMessage("Product description must be between 10 and 500 characters.")
      .trim()
      .escape(),

    body("category")
      .optional()
      .isString()
      .withMessage("Product category must be a string.")
      .isIn(["fruits", "vegetables"])
      .withMessage('Product category must be either "fruits" or "vegetables".'),

    body("photo")
      .optional()
      .isString()
      .withMessage("Product photo URL must be a string.")
      .isURL()
      .withMessage("Product photo URL must be a valid URL."),
  ];
};

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  res.status(StatusCodes.BAD_REQUEST).json({ errors: errors.array() });
};

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const { name, description, category, photo } = req.body;

    const createdProduct = await Product.create({
      name,
      description,
      category,
      photo,
    });
    res.status(StatusCodes.CREATED).json(createdProduct);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Failed to create product.", error: error.message });
  }
};

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(StatusCodes.OK).json(products);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Failed to fetch products.", error: error.message });
  }
};

// Get a product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(StatusCodes.NOT_FOUND).json({ message: "Product not found." });
      return;
    }
    res.status(StatusCodes.OK).json(product);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Failed to fetch product.", error: error.message });
  }
};

// Update specific fields of a product by ID
export const updateProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const updateFields = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updateFields,
      { new: true }
    );

    if (!updatedProduct) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Product not found." });
    }

    return res.status(StatusCodes.OK).json(updatedProduct);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Failed to update product.", error: error.message });
  }
};

// Delete a product by ID
export const deleteProductById = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      res.status(StatusCodes.NOT_FOUND).json({ message: "Product not found." });
      return;
    }
    res.status(StatusCodes.OK).json({
      message: "Product deleted successfully.",
      product: deletedProduct,
    });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Failed to delete product.", error: error.message });
  }
};
