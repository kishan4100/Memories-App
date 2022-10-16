import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postRedux";

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
