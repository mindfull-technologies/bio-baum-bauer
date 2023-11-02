import { Schema, model } from "mongoose";

const commentSchema = new Schema({
  date: { type: Date, default: Date.now },
  content: {
    type: String,
    required: true,
  },
});

const Comment = model("comment", commentSchema);

export default Comment;
