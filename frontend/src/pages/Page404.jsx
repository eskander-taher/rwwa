import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import RwButton from "../components/UI/RwButton";
import { useNavigate } from "react-router-dom";


export default function Page404() {
  const theme  = useTheme()
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: theme.palette.secondary.light,
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: "white" }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <RwButton variant="contained" onClick={()=>navigate("/")}>Back Home</RwButton>
    </Box>
  );
}
