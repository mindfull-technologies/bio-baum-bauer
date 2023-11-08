import express from "express";
import {
  createComment,
  getAllComments,
  getCommentById,
  updateCommentById,
  deleteCommentById,
  profanityFilter,
  validateComment,
} from "../controllers/feedbackController.js";

const router = express.Router();

// Create a new comment
router.post("/create", validateComment, profanityFilter, createComment);

// Get all comments
router.get("/", getAllComments);

// Get a comment by ID
router.get("/:id", getCommentById);

// Update a comment by ID
router.patch(
  "/update/:id",
  validateComment,
  profanityFilter,
  updateCommentById
);

// Delete a comment by ID
router.delete("/delete/:id", deleteCommentById);
export default router;