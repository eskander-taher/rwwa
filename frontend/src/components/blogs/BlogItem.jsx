import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const BlogItem = ({
  id,
  title,
  body,
  author,
  category,
  image,
  subCategory,
  createdAt,
  text,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const blogText = JSON.parse(text);
  console.log(blogText);

  const intro = blogText.blocks.slice(0, 3).reduce((result, block) => {
    return `${result} ${block.text}`;
  }, "");



  const date = new Date(createdAt);

  const handleClickCard = () =>
    navigate("/blogs/" + id, {
      state: {
        blog: {
          id,
          title,
          body,
          author,
          category,
          image,
          subCategory,
          createdAt,
          text,
        },
      },
    });

  return (
    <Card
      sx={{
        cursor: "pointer",
        borderRadius: "50px",
        width: "300px",
        height: "350px",
        "&:hover": {
          boxShadow: 5,
        },
        "&:active": {
          boxShadow: 1,
        },
        boxShadow: 2,
      }}
      onClick={handleClickCard}
    >
      <CardMedia
        component="img"
        height="180px"
        image={"http://localhost:5000/" + image}
        alt={title}
      />
      <CardContent sx={{ position: "relative" }}>
        <Typography
          variant="h3"
          sx={{
            backgroundColor: theme.palette.secondary.main,
            position: "absolute",
            top: "-13%",
            right: "0%",
            padding: "5px 10px",
            borderRadius: "50px 0 0 50px ",
            color: "white",
          }}
        >
          {title.length < 10 ? title : `...${title.substring(0, 10)}`}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.primary.main,
            border: `${theme.palette.primary.main} 2px solid`,
            borderRadius: "50px",
            position: "absolute",
            padding: "2px 40px",
            top: "10px",
          }}
        >
          {category}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            textAlign: "end",
            width: "268px",
            lineBreak: "normal",
            marginTop: "35px",
            height: "63px",
          }}
        >
          {intro.length > 80 ? `${intro.substring(0, 80).concat(" ... الخ")}` : intro}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
            color: "#868E96",
            fontSize: "12px",
            marginTop: "10px",
          }}
        >
          <Typography fontSize="12px">{author}</Typography>
          <Typography fontSize="12px">
            {date.getDate() +
              " / " +
              date.getMonth() +
              " / " +
              date.getFullYear()}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogItem;
