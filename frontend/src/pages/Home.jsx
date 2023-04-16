import { Button, Typography, Box, Grid, useTheme } from "@mui/material";
import { Stack } from "@mui/system";

import React from "react";
import RwButton from "../components/UI/RwButton";
import Section from "../components/UI/Section";
import AboutSection from "./homeComponents/AboutSection";
import BlogsSection from "./homeComponents/BlogsSection";
import HeroSlider from "./homeComponents/HeroSlider";
import VersionSection from "./homeComponents/VersionsSection";
import VirsionHome from "./VirsionHome";


const Home = () => {
  
  return (
    <>
      <HeroSlider />
      <BlogsSection />
      <VersionSection />
      <AboutSection />
      {/* <VirsionHome/> */}
    </>
  );
};

export default Home;
