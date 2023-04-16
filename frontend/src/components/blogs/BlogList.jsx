import { Stack } from "@mui/material";
import React from "react";
import BlogItem from "./BlogItem";

const BlogList = ({ blogs }) => {
  return (
    <Stack
      flexDirection="row"
      flexWrap="wrap"
      gap="100px"
      justifyContent="center"
      height="auto"
    >
      {blogs &&
        blogs.map((blog) => {
          return <BlogItem key={blog.id} {...blog} />;
        })}
    </Stack>
  );
};

export default BlogList;
