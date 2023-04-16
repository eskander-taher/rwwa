import React, { useEffect } from "react";
import BlogList from "../../components/blogs/BlogList";
import BlogItem from "../../components/blogs/BlogItem";
import RwButton from "../../components/UI/RwButton";
import Section from "../../components/UI/Section";
import { useNavigate } from "react-router-dom";
import useBlogsContext from "../../hooks/useBlogsContext";
import useHttpRequest from "../../hooks/useHttpRequest";
import { Box, CircularProgress } from "@mui/material";

const BlogsSection = () => {
  const { latestThreeBlogs, blogsDispatch } = useBlogsContext();
  const navigate = useNavigate();

  const { sendRequest, error, isLoading } = useHttpRequest();

  useEffect(() => {
    sendRequest({ url: "/api/blogs/latest" }, (data) =>
      blogsDispatch({ type: "SET_LATEST_BLOGS", payload: data })
    );
  }, [blogsDispatch, sendRequest]);

  if (error) {
    return <>error</>;
  }

  return (
    <Section header="مقالات" container>
      {isLoading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <BlogList blogs={latestThreeBlogs} isLoading={isLoading} />
          <RwButton onClick={() => navigate("/blogs")}>
            المزيد من المقالات
          </RwButton>
        </>
      )}
    </Section>
  );
};

export default BlogsSection;
