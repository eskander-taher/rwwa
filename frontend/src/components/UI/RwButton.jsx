import styled from '@emotion/styled';
import { alpha, Button } from '@mui/material';
import React from 'react'

const RwButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  fontWeight: 400,
  fontSize: "20px",
  color: "#FFFFFF",
  padding: "24px 54px",
  borderRadius: "60px",
  textDecoration: "uppercase",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  "&:disabled": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default RwButton