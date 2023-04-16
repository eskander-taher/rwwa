import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { EditorState, convertFromRaw } from "draft-js";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { Typography, Box, Grid, Container } from "@mui/material";
import { Stack } from "@mui/system";
import { Editor } from "react-draft-wysiwyg";
import useBlogsContext from "../../hooks/useBlogsContext";
import BlogItem from "./BlogItem";
import useHttpRequest from "../../hooks/useHttpRequest";
import {
  FacebookMessengerShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
} from "react-share";
const URL = "http://localhost:5000/";

const Blog = () => {
  const {id} = useParams();
  const [blog, setBlog] = useState(null);
  const { blogsDispatch } = useBlogsContext();
  const [similarBlogs, setSimilarBlogs] = useState([]);
  // const date = new Date(blog.createdAt);

  const {
    sendRequest: sendGetSimilarBlogsRequest,
    error: getSimilarBlogsError,
    isLoading: getSimilarBlogsIsLoading,
  } = useHttpRequest();
  const {
    sendRequest: sendGetBlogRequest,
    error: getBlogError,
    isLoading: getblogIsLoading,
  } = useHttpRequest();

  const [editorState, setEditorState] = useState(() => {
    EditorState.createEmpty();
  });

  useEffect(() => {
    if (blog) {
      setEditorState(EditorState.createWithContent(convertFromRaw(blog.text)));
    }
  }, [blog]);

  useEffect(() => {
    sendGetBlogRequest(
      {
        url: `/api/blogs/${id}`,
      },
      (blogData) => {
        blogData.text = JSON.parse(blogData.text);
        blogData.createdAt = new Date(blogData.createdAt);
        setBlog(blogData);
        sendGetSimilarBlogsRequest({ url: "/api/blogs" }, (blogsData) => {
          blogsDispatch({ type: "SET_BLOGS", payload: blogsData });
          const similar = blogsData.filter(
            (item) =>
              item.subCategory === blogData.subCategory &&
              item.id !== blogData.id
          );
          //shuffle
          let currentIndex = similar.length,
            randomIndex;
          while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [similar[currentIndex], similar[randomIndex]] = [
              similar[randomIndex],
              similar[currentIndex],
            ];
          }
          setSimilarBlogs(similar.slice(0, 3));
        });
      }
    );
  }, [sendGetSimilarBlogsRequest, blogsDispatch, id, sendGetBlogRequest]);

  if(!blog){
    return <></>
  }

  return (
    <Grid
      display="flex"
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={{ xs: "20px", md: "50px" }}
      m="0"
      p="0"
    >
      <Stack
        height="80vh"
        width="100%"
        spacing={{ xs: 15, md: 40 }}
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        sx={{
          background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${
            URL + blog.image
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Box
              height={{ xs: "80px", md: "150px" }}
              // width={{ xs: "150px", md: "300px" }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: { xs: "10px", md: "20px" },
              }}
            >
              <Typography color="#fff" fontSize={{ xs: "14px", md: "24px" }}>
                {blog.author}
              </Typography>
              <Typography color="#fff" fontSize={{ xs: "14px", md: "24px" }}>
                {blog.createdAt.getDate() +
                  " / " +
                  blog.createdAt.getMonth() +
                  " / " +
                  blog.createdAt.getFullYear()}
              </Typography>
            </Box>
            <Box
              height={{ xs: "125px", md: "250px" }}
              // width={{ xs: "150px", md: "600px" }}

              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Box
                height={{ xs: "45px", md: "90px" }}
                width={{ xs: "200px", md: "500px" }}
                bgcolor="#1C6580"
                sx={{
                  justifySelf: "flex-end",
                  alignSelf: "flex-end",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50px",
                }}
              >
                <Typography color="#fff" fontSize={{ xs: "20px", md: "46px" }}>
                  {blog.title}
                </Typography>
              </Box>
              <Box
                height={{ xs: "30px", md: "60px" }}
                width={{ xs: "75px", md: "150px" }}
                bgcolor="#DF5E60"
                sx={{
                  justifySelf: "flex-end",
                  alignSelf: "flex-end",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50px",
                }}
              >
                <Typography color="#fff" fontSize={{ xs: "16px", md: "28px" }}>
                  {blog.category}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Stack>
      <Container>
        <Stack
          direction="column"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pb={{ xs: "15px", md: "30px" }}
          width="90vw"
        >
          <Container>
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Stack
                sx={{ backgroundColor: "#f1f3f5" }}
                spacing={3}
                padding="12px 24px"
                direction="row"
                borderRadius={4}
                alignItems="center"
                justifyContent="center"
              >
                <FacebookMessengerShareButton url={window.location.href}>
                  <FacebookIcon size={32} round={true} />
                </FacebookMessengerShareButton>
                <TwitterShareButton url={window.location.href}>
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <WhatsappShareButton url={window.location.href}>
                  <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
                <TelegramShareButton url={window.location.href}>
                  <TelegramIcon size={32} round={true} />
                </TelegramShareButton>
              </Stack>
            </Stack>
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              editorClassName="editor"
              toolbarClassName="toolbatar"
              readOnly
              wrapperClassName="wrapper"
            />
          </Container>
        </Stack>
      </Container>
      <Container>
        <Stack
          // height={{ xs: "125px", md: "250px" }}
          // width={{ xs: "85%", md: "1278px" }}
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          width="100%"
          gap={{ xs: "20px", md: "40px" }}
          sx={{ justifySelf: "flex-end", alignSelf: "right" }}
        >
          <Typography
            textAlign="right"
            fontSize={{ xs: "14px", md: "28px" }}
            fontWeight="400"
            lineHeight={{ xs: "20px", md: "35px" }}
            color="#343A40"
          >
            الكاتب / {blog.author}
          </Typography>
          <Box
            height={{ xs: "100px", md: "250px" }}
            width={{ xs: "100px", md: "250px" }}
            sx={{
              background: `url(${"Profile"})`,
              backgroundSize: "contain",
              backgroundRepeat: "none",
              borderRadius: "50%",
              justifySelf: "flex-end",
            }}
          ></Box>
        </Stack>
      </Container>
      <Stack
        // height={{ xs: "750px", md: "500px" }}
        direction="column"
        spacing={{ xs: 3, md: 5 }}
        margin="40px 0"
      >
        <Typography
          textAlign={{ xs: "center", md: "right" }}
          fontSize={{ xs: "16px", md: "32px" }}
          lineHeight="40px"
          justifyContent="space-around"
          color="#343A40"
        >
          : مقالات شبيهة
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: "30px", md: "100px" },
          }}
        >
          {similarBlogs.map((b) => {
            return <BlogItem {...b} />;
          })}
        </Box>
      </Stack>
    </Grid>
  );
};

export default Blog;
