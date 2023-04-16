import { Box, Container, Stack } from "@mui/material";
import React from "react";
import SectionHeader from "./SectionHeader";

const Section = ({ children, header, container = false, sx, headerStyle }) => {
  return (
    <Box m="100px 0" with="100vw" sx={{ ...sx }}>
      {container ? (
        <Container>
          <Stack spacing={5} alignItems="center" width="100%">
            <SectionHeader header={header} style={headerStyle} />
            <Stack alignItems="center" spacing={5} width="100%">
              {children}
            </Stack>
          </Stack>
        </Container>
      ) : (
        <Stack spacing={5}>
          <SectionHeader header={header} style={headerStyle} />
          <Stack alignItems="center" spacing={5} width="100%">
            {children}
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default Section;
