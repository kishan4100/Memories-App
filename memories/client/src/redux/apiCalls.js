import { postRequests, createPost } from "../api/Request";
import { fetchPosts, uploadPost } from "./postRedux";

export const getPosts = async (dispatch) => {
  try {
    const res = await postRequests();
    dispatch(fetchPosts(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const addPost = async (dispatch, newPost) => {
  try {
    const res = await createPost(newPost);
    dispatch(uploadPost(res.data));
  } catch (error) {
    console.log(error);
  }
};
