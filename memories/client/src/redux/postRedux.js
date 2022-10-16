import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    fetchPosts: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    uploadPost: (state, action) => {
      state.posts?.push(action.payload);
      //  return [...state.posts, action.payload];
    },
  },
});

export const { fetchPosts, uploadPost } = postSlice.actions;

export default postSlice.reducer;
