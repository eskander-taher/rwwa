import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Box,
  Input,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RwButton from "../components/UI/RwButton";
import useHttpRequest from "../hooks/useHttpRequest";

const Contact = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const disabled =
    details.email === "" || details.message === "" || details.name === "";

  const { sendRequest, error, isLoading } = useHttpRequest();

  const sendMessage = async () => {
    sendRequest(
      {
        url: "/api/contact/",
        data: details,
        method: "POST",
      },
      (data) => console.log(data)
    );
  };
  const contactsStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    justifyContent: { xs: "center", md: "right" },
    alignItems: "center",
    color: "#1C6580",
  };

  const inputStyle = {
    sx: {
      borderRadius: "20px",
      backgroundColor: "#F1F3F5",
      textAlign: "right",
      p: "15px",
    },
  };
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      height={{ xs: "900px", md: "700px" }}
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: 10, md: 30 }}
    >
      <Box
        sx={{
          maxWidth: "300px",
          maxHeight: "250px",
          m: 0,
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box component="span" sx={contactsStyle}>
          <Typography variant="h5" textAlign="center">
            email@gmail.com{" "}
          </Typography>
          <EmailIcon />
        </Box>
        <Box component="span" sx={contactsStyle}>
          <Typography variant="h5">+703776441777 </Typography>
          <PhoneEnabledIcon />
        </Box>
        <Box component="span" sx={contactsStyle}>
          <Typography variant="h5">sant,balshoi barulak </Typography>
          <LocationOnIcon />
        </Box>
      </Box>
      <Card
        sx={{
          height: "500px",
          width: { md: "424px" },
          borderRadius: "50px",
          boxShadow: "5px 5px 20px  lightgray",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: "30px 0",
          }}
        >
          <Typography fontSize="22px" color="#343A40" textAlign="center">
            تواصل معنا
          </Typography>
          <Box
            sx={{
              width: "100px",
              height: "10px",
              background: "#256C86",
              borderRadius: "50px",
              mb: "20px",
            }}
          ></Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: { xs: "250px", md: "300px" } },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Input
              id=""
              placeholder="الاسم"
              type="text"
              fullWidth
              inputProps={inputStyle}
              disableUnderline
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
            <Input
              id=""
              placeholder="البريد الالكتروني"
              type="email"
              fullWidth
              inputProps={inputStyle}
              disableUnderline
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
            <Input
              id=""
              placeholder="النص"
              type="text"
              fullWidth
              minRows={4}
              maxRows={5}
              multiline
              inputProps={inputStyle}
              disableUnderline
              onChange={(e) =>
                setDetails({ ...details, message: e.target.value })
              }
              value={details.message}
            />
          </Box>

          <RwButton
            sx={{ padding: "18px 42px !important" }}
            onClick={sendMessage}
            disabled={disabled}
          >
            ارسل
          </RwButton>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Contact;
