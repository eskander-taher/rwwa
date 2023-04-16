import { Dashboard, DashboardOutlined } from "@mui/icons-material";
import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton, useTheme } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupsIcon from "@mui/icons-material/Groups";
import { Stack } from "@mui/system";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CategoryIcon from "@mui/icons-material/Category";
import useAuthContext from "../../hooks/useAuth";

const DashbourdSidebar = () => {
  const { collapseSidebar, collapsed } = useProSidebar(); 
  const theme = useTheme();
  const pathname = useLocation().pathname;
    const { logoutUser } = useAuthContext();


  console.log(pathname)

  const style = {backgroundColor:theme.palette.secondary.main}
  return (
    <Sidebar>
      <Menu>
        <MenuItem>
          <IconButton onClick={() => collapseSidebar(!collapsed)}>
            <MenuIcon />
          </IconButton>
        </MenuItem>
        <MenuItem
          icon={<AccountCircleIcon />}
          component={<Link to="dashboard/profile" />}
          style={pathname === "/dashboard/profile" ? style : {}}
        >
          صفحة الشخصية
        </MenuItem>
        <MenuItem
          icon={<ArticleIcon />}
          component={<Link to="dashboard/blogs" />}
          style={pathname === "/dashboard/blogs" ? style : {}}
        >
          مقالات
        </MenuItem>
        <MenuItem
          icon={<MenuBookIcon />}
          component={<Link to="dashboard/versions" />}
          style={pathname === "/dashboard/versions" ? style : {}}
        >
          الاصدارات
        </MenuItem>
        <MenuItem
          icon={<AdminPanelSettingsIcon />}
          component={<Link to="dashboard/admins" />}
          style={pathname === "/dashboard/admins" ? style : {}}
        >
          المشرفين
        </MenuItem>
        <MenuItem
          icon={<GroupsIcon />}
          component={<Link to="dashboard/workers" />}
          style={pathname === "/dashboard/workers" ? style : {}}
        >
          العاملين
        </MenuItem>
        <MenuItem
          icon={<CategoryIcon />}
          component={<Link to="dashboard/categories" />}
          style={pathname === "/dashboard/categories" ? style : {}}
        >
          الأصناف
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default DashbourdSidebar;
