import { Stack } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import DashbourdSidebar from "./DashbourdSidebar";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const location = useLocation();
  const rootPath = location.pathname.split("/")[1];
  

  return (
    <div>
      <Header rootPath={rootPath} />
      <Stack flexDirection="row" sx={{}}>
        {rootPath === "dashboard" ? <DashbourdSidebar /> : <></>}
        <main style={{ flex: 1 }}>{children}</main>
      </Stack>
      <Footer />
    </div>
  );
};

export default Layout;
