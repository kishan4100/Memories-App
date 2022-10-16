import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    titile: String,
    message: String,
    creator: String,
    tags: [],
    likeCOunt: {
      type: Number,
      default: 0,
    },
    selectedFile: String,
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamp: true }
);

export const PostMessage = mongoose.model("post", postSchema);
