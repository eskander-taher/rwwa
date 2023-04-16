import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import React from "react";
import { useMediaQuery } from "@mui/material";

const WorkerList = ({ title, workers }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isMatch)
  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: "50px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.1)",
      }}
    >
      <CardContent
        sx={{ p: "0", m: "0", display: "flex", justifyContent: "flex-end" }}
      >
        <Box
          sx={{
            height: "50px",
            width: "170px",
            borderRadius: "0 50px ",
            backgroundColor: "#256C86",
            justifySelf: "flex-end",
          }}
        >
          <Typography
            variant="h4"
            color="#fff"
            lineheight="35px"
            textAlign="center"
            p="10px"
          >
            {title}
          </Typography>
        </Box>
      </CardContent>
      <CardContent
        sx={{
          p: "0",
          m: "0",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: `${isMatch ? "column" : "row"}`,
        }}
        // flexDirection={isMatch ? "column" : "row"}
      >
        {workers.map((worker) => {
          return (
            <Box
              key={worker.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "15px",
                padding: "14px 0",
              }}
            >
              <Typography
                variant="h5"
                color="#343A40"
                sx={{
                  LineHeight: "20px",
                  textAlign: "center",
                  fontFamily: "Readex Pro",
                }}
              >
                {worker.job}
              </Typography>
              <Typography
                variant="h6"
                color="#DF5E60"
                sx={{
                  LineHeight: "20px",
                  textAlign: "center",
                  fontFamily: "Readex Pro",
                }}
              >
                {worker.name}
              </Typography>
            </Box>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default WorkerList;
