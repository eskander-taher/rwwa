import React from "react";
import { Typography, Box, useTheme, Stack } from "@mui/material";


const SectionHeader = ({ header,style }) => {
  const theme = useTheme();
  return (
    <Stack alignItems="center">
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: "48px",
            fontWeight: 600,
            color: theme.palette.text.primary,
            ...style,
          }}
        >
          {header}
        </Typography>
        <Box
          sx={{
            backgroundColor: theme.palette.secondary.main,
            marginLeft: "auto",
            borderRadius: "80px",
            marginTop: "5px",
          }}
          height="12px"
        ></Box>
      </Box>
    </Stack>
  );
};

export default SectionHeader;
