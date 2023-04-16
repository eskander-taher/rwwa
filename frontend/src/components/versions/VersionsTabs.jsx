import { Tabs, Box, Tab, useTheme } from "@mui/material";
import React, { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const VersionsTabs = ({ versions, version, setVersion }) => {
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setVersion(newValue);
  };

  return (
    <Box
      sx={{
        maxWidth: { xs: 350, sm: 480, md: 480 },
        bgcolor: "white",
        borderRadius: "50px",
        padding: "0 10px",
      }}
    >
      <Tabs
        value={version}
        onChange={handleChange}
        sx={{
          width: "100%",
          alignItems: "center",
          gap: "10px",
          "& .MuiTabs-indicator": {
            display: "none",
          },
        }}
        scrollButtons
        variant="scrollable"
        allowScrollButtonsMobile
        ScrollButtonComponent={(props) => {
          if (props.direction === "left") {
            return (
              <ArrowCircleLeftIcon
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "36px",
                  cursor: "pointer",
                }}
                {...props}
              />
            );
          } else if (props.direction === "right") {
            return (
              <ArrowCircleRightIcon
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "36px",
                  cursor: "pointer",
                }}
                {...props}
              />
            );
          }
        }}
      >
        {versions.map((version) => {
          return (
            <Tab
              label={`الاصدار ${version.versionNum}`}
              disableRipple
              key={version.id}
              sx={{
                width: "auto",
                minWidth: 0,
                minHeight: 0,
                height: "30px",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                borderRadius: "50px",
                cursor: "pointer !impotant",
                "&.Mui-selected ": {
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                },
              }}
            />
          );
        })}
      </Tabs>
    </Box>
  );
};

export default VersionsTabs;
