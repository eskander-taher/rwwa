import { AppBar, Stack, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import SideBar from "./SideBar";
import { NavItem, NavMenuButton } from "./HeaderComponents";
import { blogsMenu, aboutMenu } from "./data";
import logo from "./rwaa-logo-nav.png";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuth";

const Header = ({ rootPath }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const { authState,logoutUser } = useAuthContext();

  const style = {
    backgroundColor: theme.palette.primary.main,
    textShadow: "0px 5px 6px  rgba(0,0,0,0.5)",
    color: "white !important",
  };

  return (
    <AppBar sx={{ backgroundColor: "white", position: "sticky" }} elevation={0}>
      <Toolbar>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <img
            src={logo}
            alt="rwwa"
            height="70px"
            onClick={() => navigate("/")}
          />
          {isMatch ? (
            <SideBar rootPath={rootPath} />
          ) : (
            <Stack flexDirection="row" gap="20px">
              <NavItem to="/" sx={rootPath === "" ? style : null}>
                رئيسية
              </NavItem>
              <NavItem
                to="/versions"
                sx={rootPath === "versions" ? style : null}
              >
                اصدارات
              </NavItem>
              <NavItem to="/blogs" sx={rootPath === "blogs" ? style : null}>
                المقالات
              </NavItem>
              <NavMenuButton
                name="عن رؤى"
                isStyled={rootPath === "about"}
                style={style}
                menuItems={aboutMenu}
              />
              <NavItem to="/contact" sx={rootPath === "contact" ? style : null}>
                تواصل
              </NavItem>
              {authState ? (
                <NavItem
                  to="/dashboard/profile"
                  sx={rootPath === "dashboard" ? style : null}
                >
                  لوحة التحكم
                </NavItem>
               ) : (
                <></>
              )} 
              {authState ? (
                <NavItem
                  onClick={logoutUser}
                  // sx={rootPath === "dashboard" ? style : null}
                >
                  تسجيل خروج
                </NavItem>
              ) : (
                <></>
              )}
            </Stack>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
