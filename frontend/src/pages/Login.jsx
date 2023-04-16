import {
  Alert,
  Box,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import RwButton from "../components/UI/RwButton";
import useHttpRequest from "../hooks/useHttpRequest";
import useAuth from "../hooks/useAuth";
const Login = () => {
  const theme = useTheme();
  const [user, setUser] = useState({ email: "", password: "" });
  const { loginUser, authError } = useAuth();

  const isDisabled = !(Boolean(user.email) && Boolean(user.password));

  const handleLoginChange = (email, value) => {
    setUser({ ...user, [email]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(223);
    loginUser(user);
  };

  return (
    <Stack m="40px auto" maxWidth="300px" padding="10px" gap="10px">
      <Typography
        textAlign="center"
        gutterBottom
        fontSize="28px"
        color={theme.palette.secondary.main}
      >
        تسجيل
      </Typography>
      <TextField
        type="email"
        label="البريد الالكتروني"
        name="email"
        value={user.email}
        onChange={(e) => handleLoginChange(e.target.name, e.target.value)}
      />
      <TextField
        type="password"
        label="كلمة المرور"
        name="password"
        onChange={(e) => handleLoginChange(e.target.name, e.target.value)}
      />
      <RwButton
        sx={{ padding: "10px 20px !important" }}
        disabled={isDisabled}
        onClick={handleLogin}
      >
        تسجيل
      </RwButton>
      <Box height="50px">
        {authError ? (
          <Alert severity="error">{authError.message}</Alert>
        ) : (
          <></>
        )}
      </Box>
    </Stack>
  );
};

export default Login;
