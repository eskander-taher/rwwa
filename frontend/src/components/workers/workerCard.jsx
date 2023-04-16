import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";


const workersData=[]

const WorkerCard = () => {
  const WCardStyles = {
    boxStyle: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "15px",
    },
    textStyles: {
      LineHeight: "20px",
      textAlign: "center",
      fontFamily: "Readex Pro",
    },
  };


  const workersCards = workersData.map((card) => {
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
              LineHeight="35px"
              textAlign="center"
              p="10px"
            >
              {card.department}
            </Typography>
          </Box>
        </CardContent>
        <CardContent
          sx={{
            p: "0",
            m: "0",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Box sx={WCardStyles.boxStyle}>
            <Typography
              variant="h5"
              color="#343A40"
              sx={WCardStyles.textStyles}
            >
              {card.position3}
            </Typography>
            <Typography
              variant="h6"
              color="#DF5E60"
              sx={WCardStyles.textStyles}
            >
              {card.worker3}
            </Typography>
          </Box>
          <Box sx={WCardStyles.boxStyle}>
            <Typography
              variant="h5"
              color="#343A40"
              sx={WCardStyles.textStyles}
            >
              {card.position2}
            </Typography>
            <Typography
              variant="h6"
              color="#DF5E60"
              sx={WCardStyles.textStyles}
            >
              {card.worker2}
            </Typography>
          </Box>
          <Box sx={WCardStyles.boxStyle}>
            <Typography
              variant="h5"
              color="#343A40"
              sx={WCardStyles.textStyles}
            >
              {card.position1}
            </Typography>
            <Typography
              variant="h6"
              color="#DF5E60"
              sx={WCardStyles.textStyles}
            >
              {card.worker1}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  });

  return<></>
};

export default WorkerCard;
