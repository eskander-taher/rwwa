import styled from "@emotion/styled";
import { Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const NavItem = styled((props) => (
  <Button disableRipple disableElevation component={Link} {...props} />
))((props) => ({
  borderRadius: "50px",
  fontSize: "16px",
  cursor: "pointer",
  color: props.theme.palette.text.primary,
  height: "35px",
  fontWeight: 400,
  padding: "0 16px",
  "&:hover": {
    backgroundColor: props.theme.palette.primary.main,
    textShadow: "0px 5px 6px  rgba(0,0,0,0.5)",
    color: "white",
  },
}));

export const NavMenuItem = styled((props) => (
  <MenuItem disableRipple elevation={0} {...props} />
))(({ theme }) => ({
  "&:before": {
    content: "''",
    display: "block",
    position: "absolute",
    height: "25px",
    width: "5px",
    backgroundColor: theme.palette.secondary.main,
    right: 5,
    borderRadius: "50px",
  },
  borderRadius: "10px",
}));

export const NavMenu = styled((props) => (
  <Menu
    transformOrigin={{ horizontal: "right", vertical: "top" }}
    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    variant="selectedMenu"
    sx={{
      "& .MuiMenu-list": {
        display: "flex",
        gap: "10px",
      },
      "& .MuiMenu-root": {
        marginTop: "10px",
      },
    }}
    PaperProps={{
      elevation: 0,
      sx: {
        borderRadius: "20px",
        overflow: "visible",
        filter: "drop-shadow(0px 5px 15px rgba(0,0,0,0.25))",
        mt: 1.5,
        padding: "5px 20px",
        "& .MuiAvatar-root": {
          width: 32,
          height: 32,
          ml: -0.5,
          mr: 1,
        },
        "& .MuiMenu-paper": {
          height: "1000px",
        },
        "&:before": {
          content: '""',
          display: "block",
          position: "absolute",
          top: 0,
          right: 35,
          width: 14,
          height: 13,
          bgcolor: "background.paper",
          transform: "translateY(-50%) rotate(45deg)",
          zIndex: 0,
        },
      },
    }}
    {...props}
  />
))(({ theme }) => ({}));

export const NavMenuButton = ({ name, menuItems, style, isStyled }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  let isOpen = Boolean(anchorEl);
  const [styled, setStyled] = useState(false);

  const handleClick = (event) => {
    console.log("clicked");
    setStyled(true);
    setAnchorEl(event.currentTarget);
    isOpen = !isOpen
  };

  const handleClose = () => {
    setStyled(false);
    setAnchorEl(null);
  };

  return (
    <div>
      <NavItem
        id="basic-button"
        aria-controls={isOpen ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
        sx={styled || isStyled ? style : null}
        onClick={handleClick}
        startIcon={<KeyboardArrowDownIcon />}
      >
        {name}
      </NavItem>
      <NavMenu
        id="basic-menu"
        open={isOpen}
        onClose={handleClose}
        anchorEl={anchorEl}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuItems.map((menuItem) => {
          return (
            <div key={menuItem.http}>
              <NavMenuItem component={Link} to={`about/${menuItem.http}`}>
                {menuItem.name}
              </NavMenuItem>
            </div>
          );
        })}
      </NavMenu>
    </div>
  );
};
