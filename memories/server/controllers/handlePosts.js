import { PostMessage } from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostMessage.find();

    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = new PostMessage(req.body);

  try {
    const uploadedPost = await post.save();
    res.status(201).json(uploadedPost);
  } catch (error) {
    res.status(error.response.status);
    return res.send(error.message);
  }
};
