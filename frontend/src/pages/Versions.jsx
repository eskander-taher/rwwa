import React, { useEffect, useState } from "react";
import Section from "../components/UI/Section";
import VersionItem from "../components/versions/VersionItem";
import VersionsTabs from "../components/versions/VersionsTabs";
import useHttpRequest from "../hooks/useHttpRequest";
import useVersionsContext from "../hooks/useVersionsContext";
import { versionsActions } from "../context/VersionsContext";
import { Box, CircularProgress } from "@mui/material";
const Versions = () => {
  const { versions, versionsDispatch } = useVersionsContext();
  const [version, setVersion] = useState(0);

  const { error, isLoading, sendRequest } = useHttpRequest();

  useEffect(() => {
    sendRequest({ url: "/api/magazines" }, (data) =>
      versionsDispatch({ type: versionsActions.SET_VERSIONS, payload: data })
    );
  }, [sendRequest, versionsDispatch]);


  if (error) {
    return <>error</>;
  }


  return (
    <Section header="اصدارات" container>
      {isLoading || versions.length === 0 ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <VersionsTabs
            version={version}
            setVersion={setVersion}
            versions={versions}
          />
          <VersionItem version={versions[version]} />
        </>
      )}
    </Section>
  );
};

export default Versions;
