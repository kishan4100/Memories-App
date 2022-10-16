import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/post";
import useStyles from "./styles";

const Posts = () => {
  const posts = useSelector((state) => state.post);
  const classes = useStyles();
  console.log(posts.posts);

  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.posts?.map((post) => (
        <Grid key={post?._id} item xs={12} sm={6} md={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
