import { Box, CircularProgress } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RwButton from "../../components/UI/RwButton";
import Section from "../../components/UI/Section";
import VersionItem from "../../components/versions/VersionItem";
import useHttpRequest from "../../hooks/useHttpRequest";

const VersionSection = () => {
  const navigate = useNavigate();
  const { sendRequest, error, isLoading } = useHttpRequest();
  const [lasetVersion, setLastVersion] = useState({});

  useEffect(() => {
    sendRequest({ url: "api/magazines/newest" }, (data) =>
      setLastVersion(data[0])
    );
  }, [sendRequest]);

  if (error) {
    return <></>;
  }

  return (
    <Section header="الاصدارات" container>
      {isLoading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
      <VersionItem version={{...lasetVersion,isNewest:true}} />
      <RwButton onClick={() => navigate("/versions")}>بقية الاصدارات</RwButton>
        </>
       )} 
    </Section>
  );
};

export default VersionSection;
