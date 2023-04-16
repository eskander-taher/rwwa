import React from "react";
import styled from "@emotion/styled";
import {
  Box,
  List,
  ListItem,
  Typography,
  Stack,
  ListItemButton,
  useTheme,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Telegram,
  Email,
  LocationOn,
  Phone,
} from "@mui/icons-material";
import Logo from "./logo.jpg";
import { Link } from "react-router-dom";

// styled components
const ContactFooterItem = styled((props) => (
  <Box
    component="span"
    sx={{ justifyContent: { xs: "center", md: "right" } }}
    {...props}
  />
))(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  alignItems: "center",
}));

const LinkFooterItem = styled((props) => (
  <ListItemButton
    disableRipple
    component={Link}
    style={{ backgroundColor: "transparent" }}
    sx={{
      // textAlign: { xs: "center", md: "center" },
      textAlign:"end",
      fontWeight: { xs: "400" },
      fontSize: { xs: "14px", md: "16px" },
      p: 0,
      m: 0,
    }}
    {...props}
  />
))(({ theme }) => ({
  color: "#FFFFFF",
  letterSpacing: "1px",
  fontFamily: theme.typography.fontFamily,
}));

const FooterHeader = styled((props) => (
  <Typography
    variant="h6"
    {...props}
    sx={{
      textAlign: "right",
    }}
  />
))(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom:'20px'
}));

// main component
export default function Footer() {
    const openNewTab = (url) => window.open(url, "_blank");

  const theme = useTheme();
  return (
    <Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        bgcolor={theme.palette.secondary.main}
        color="#FFFFFF"
        padding="40px 0"
        flexWrap="wrap"
        fontSize="16px"
        spacing={{ xs: 8, md: 28 }}
        position="sticky"
      >
        <Stack gap="10px" justifyContent="center" alignItems="center">
          <Box
            width="100px"
            height="100px"
            sx={{
              borderRadius: "30px",
              background: `url(${Logo})`,
              backgroundSize: "cover",
            }}
          ></Box>
          <Typography>&copy;حقوق النشر {new Date().getFullYear()}</Typography>
          <Box
            sx={{
              mt: "10px",
              display: "flex",
              flexDirection: "row",
              gap: "25px",
            }}
          >
            <Facebook onClick={() => openNewTab("")} />
            <Telegram />
            <Instagram onClick={() => openNewTab("")} />
          </Box>
        </Stack>
        <Box>
          <FooterHeader>: روابط</FooterHeader>
          <List
            // justifyContent={{ xs: "center" }}
            // alignItems={{ xs: "center" }}
            sx={{
              pl: { xs: "52px" },
              gap: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent:"end",
              alignItems:"flex-end",
              p: 0,
            }}
          >
            <ListItem sx={{ p: 0 }}>
              <LinkFooterItem to="/">رئيسية</LinkFooterItem>
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <LinkFooterItem to="blogs">مقالات</LinkFooterItem>
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <LinkFooterItem to="versions">اصدارات</LinkFooterItem>
            </ListItem>
          </List>
        </Box>
        <Box>
          <FooterHeader>: تواصل</FooterHeader>
          <Stack
            sx={{
              gap: "20px",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <ContactFooterItem component="span">
              <Typography textAlign="center">email@gmail.com </Typography>
              <Email />
            </ContactFooterItem>
            <ContactFooterItem component="span">
              <Typography>+703776441777 </Typography> <Phone />
            </ContactFooterItem>
            <ContactFooterItem component="span">
              <Typography>sant,balshoi barulak </Typography>
              <LocationOn />
            </ContactFooterItem>
          </Stack>
        </Box>
      </Stack>
      <Box
        sx={{
          backgroundColor: "#fff",
          height: "50px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Typography variant="h5" color="#DF5E60">
          CereSoftware{" "}
        </Typography>
        <Typography variant="h5" color="#343A40" fontWeight={500}>
          {" "}
          صُمِم الموقع و طُوِر عن طريق
        </Typography>
      </Box>
    </Stack>
  );
}
