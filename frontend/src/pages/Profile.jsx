import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Photo from "./logo.jpg";
import React from "react";

const Profile = () => {
  const profileStyles = {
    blueLine: {
      // width: { xs: "120px", md: "520px" },
      width: "100%",
      height: { xs: "5px", md: "10px" },
      background: "#256C86",
      borderRadius: "30px",
    },
    pinkLine: {
      // width: { xs: "110px", md: "490px" },
      width: "100%",
      height: { xs: "5px", md: "10px" },
      background: "#DF5E60",
      borderRadius: "50px",
    },

    photo: {
      height: { xs: "100px", md: "250px" },
      width: { xs: "100px", md: "250px" },
      borderRadius: "50%",
      background: `url(${Photo})`,
      backgroundSize: "cover",
      border: { xs: "10px solid #DF5E60", md: "15px solid #DF5E60" },
    },
  };

  return (
    <Stack
      height={{ xs: "100%", md: "600px" }}
      justifyContent="space-around"
      alignItems="center"
      spacing={{ xs: "20px" }}
      p="50px 0"
    >
      <Stack direction="row" justifyContent="center">
        <Box sx={profileStyles.photo}></Box>
      </Stack>
      <Box
        sx={{
          width: { xs: "100%", md: "800px" },
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          alignItems: "center",
        }}
      >
        <Typography fontSize={{ xs: "28px", md: "60px" }} textAlign="center">
          باسل الفيصلي
        </Typography>
        <Typography fontSize={{ xs: "24px", md: "40px" }} textAlign="center">
          مطور مواقع
        </Typography>
        <Typography
          fontSize={{ xs: "20px", md: "28px" }}
          textAlign="center"
          color="#256C86"
        >
          basel@gmail.com
        </Typography>
      </Box>
    </Stack>
  );
};

export default Profile;
