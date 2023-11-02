import express from "express";
import {
  createComment,
  getAllComments,
  getCommentById,
  updateCommentById,
  deleteCommentById,
} from "../Controllers/commentController.js";

const router = express.Router();

// Create a new comment
router.post("/create", createComment);

// Get all comments
router.get("/", getAllComments);

// Get a comment by ID
router.get("/:id", getCommentById);

// Update a comment by ID
router.put("/update/:id", updateCommentById);

// Delete a comment by ID
router.delete("/delete/:id", deleteCommentById);
export default router;
