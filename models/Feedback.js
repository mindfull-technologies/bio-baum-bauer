import { Schema, model } from "mongoose";

const commentSchema = new Schema({
  date: { type: Date, default: Date.now },
  content: {
    type: String,
    required: [true, "Content is required"],
    minlength: [3, "Content must be at least 3 characters long"],
    maxlength: [300, "Content must be less than 300 characters"],
  },
});

const Comment = model("Comment", commentSchema);

export default Comment;
