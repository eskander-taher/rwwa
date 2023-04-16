import {  Drawer, IconButton, Stack, useTheme } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavItem } from "./HeaderComponents";
import { useLocation } from "react-router-dom";
import useAuthContext from "../../hooks/useAuth";

const SideBar = ({ rootPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const { logoutUser, authState } = useAuthContext();
  const location = useLocation();
  console.log(location.pathname);

  const style = {
    backgroundColor: theme.palette.primary.main,
    textShadow: "0px 5px 6px  rgba(0,0,0,0.5)",
    color: "white !important",
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        sx={{
          // padding:'20px',
          padding: "100px",
        }}
      >
        <Stack gap="20px" width="250px" marginTop={3} padding={2}>
          <NavItem
            to="/"
            sx={rootPath === "" ? style : null}
            onClick={handleClick}
          >
            رئيسية
          </NavItem>
          <NavItem
            to="/versions"
            sx={rootPath === "versions" ? style : null}
            onClick={handleClick}
          >
            اصدارات
          </NavItem>
          <NavItem
            to="/blogs"
            sx={rootPath === "blogs" ? style : null}
            onClick={handleClick}
          >
            المقالات
          </NavItem>
          <NavItem
            to="/about/who-are-we"
            sx={location.pathname === "/about/who-are-we" ? style : null}
            onClick={handleClick}
          >
            من نحن
          </NavItem>
          <NavItem
            to="/about/workers"
            sx={location.pathname === "/about/workers" ? style : null}
            onClick={handleClick}
          >
            العاملين
          </NavItem>
          <NavItem
            to="/about/supporters"
            sx={location.pathname === "/about/supporters" ? style : null}
            onClick={handleClick}
          >
            الداعمين
          </NavItem>
          <NavItem
            to="/contact"
            sx={rootPath === "contact" ? style : null}
            onClick={handleClick}
          >
            تواصل
          </NavItem>
          {authState ? (
            <>
              <NavItem
                to="/dashboard/profile"
                sx={rootPath === "dashboard" ? style : null}
                onClick={handleClick}
              >
                لوحة التحكم
              </NavItem>
              <NavItem
                sx={{
                  ":&hover": {
                    backgroundColor: theme.palette.primary.main,
                    textShadow: "0px 5px 6px  rgba(0,0,0,0.5)",
                    color: "white !important",
                  },
                }}
                onClick={logoutUser}
              >
                تسجيل خروج
              </NavItem>
            </>
          ) : (
            <></>
          )}
        </Stack>
      </Drawer>
      <IconButton
        onClick={() => setIsOpen(!isOpen)}
        sx={{ color: theme.palette.secondary.main }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default SideBar;
