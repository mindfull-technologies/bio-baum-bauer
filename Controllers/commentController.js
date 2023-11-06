import { StatusCodes } from "http-status-codes";
import Comment from "../Models/Comment.js";
import { body, validationResult } from "express-validator";
import Filter from "bad-words";

const filter = new Filter();

// Filter comments including profanity
export const profanityFilter = (req, res, next) => {
  if (filter.isProfane(req.body.content)) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Comments cannot include profanity.",
    });
  }
  next();
};

// Validator Middleware
export const validateComment = [
  body("content")
    .notEmpty()
    .withMessage("Content is required.")
    .trim()
    .isLength({ min: 3, max: 300 })
    .withMessage("Content must be between 3 and 300 characters."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ errors: errors.array() });
    }
    next();
  },
];

// Create a new comment
export const createComment = async (req, res) => {
  try {
    const createdComment = await Comment.create({ content: req.body.content });
    res.status(StatusCodes.CREATED).json(createdComment);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Failed to create comment.", error: error.message });
  }
};

// Get all comments
export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(StatusCodes.OK).json(comments);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Failed to fetch comments.", error: error.message });
  }
};

// Get a comment by ID
export const getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      res.status(StatusCodes.NOT_FOUND).json({ message: "Comment not found." });
      return;
    }
    res.status(StatusCodes.OK).json(comment);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Failed to fetch comment.", error: error.message });
  }
};

// Update a comment by ID
export const updateCommentById = async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      { content: req.body.content },
      { new: true }
    );
    if (!updatedComment) {
      res.status(StatusCodes.NOT_FOUND).json({ message: "Comment not found." });
      return;
    }
    res.status(StatusCodes.OK).json(updatedComment);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Failed to update comment.", error: error.message });
  }
};

// Delete a comment by ID
export const deleteCommentById = async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
    if (!deletedComment) {
      res.status(StatusCodes.NOT_FOUND).json({ message: "Comment not found." });
      return;
    }
    res.status(StatusCodes.OK).json({
      message: "Comment deleted successfully.",
      comment: deletedComment,
    });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Failed to delete comment.", error: error.message });
  }
};
