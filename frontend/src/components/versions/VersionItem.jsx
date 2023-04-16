import { useTheme } from "@emotion/react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import RwButton from "../UI/RwButton";
import useVersionsContext from "../../hooks/useVersionsContext";

import BGphoto from "./BGphoto.jpg";
import { useNavigate } from "react-router-dom";

const VersionItem = ({ version }) => {
  const theme = useTheme();
  const { downloadMagazine } = useVersionsContext();
  const navigate = useNavigate()

  return (
    <Grid
      direction="column"
      // maxHeight="690px"
      container
      width="90%"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: "", md: "30px" },
      }}
      m={0}
      p={0}
      color="#495057"
      fontSize="15px"
    >
      <Stack
        // width={{ xs: "100%", md: "1230px" }}
        width="100%"
        height={{ xs: "423px", md: "432px" }}
        direction={{ xs: "column", md: "row" }}
        p={0}
        m={0}
        // justifyContent="center"
        // alignContent="center"
        sx={{
          borderRadius: "50px 0 50px 0",
          boxShadow: "5px 5px 3px lightgray",
          // backgroundColor:"red"
        }}
      >
        <Box
          height={{ xs: "50%", md: "100%" }}
          width={{ xs: "100%", md: "50%" }}
          sx={{
            background: `url(${BGphoto})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50px 0 0 0",
          }}
        ></Box>
        <Stack width={{ xs: "100%", md: "50%" }}>
          <Box
            p={{ xs: "15px 15px 10px 15px", md: "30px 20px 10px 20px" }}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: { xs: "10px" },
            }}
          >
            {version?.isNewest ? (
              <Typography
                color={theme.palette.secondary.main}
                sx={{
                  border: `2px ${theme.palette.secondary.main} solid`,
                  borderRadius: "50px",
                  padding: "5px 30px",
                }}
              >
                أحدث اصدار
              </Typography>
            ) : (
              <></>
            )}

            <Typography
              // width={{ xs: "60px", md: "123px" }}
              // height={{ xs: "25px", md: "54px" }}
              fontFamily="Readex Pro"
              fontSize={{ xs: "20px", md: "36px" }}
              fontWeight="400"
              lineHeight={{ md: "45px" }}
              color=" #343A40"
              textAlign="center"
            >
              {`الاصدار ${version.versionNum}`}
            </Typography>
          </Box>
          <Box
            sx={{
              pr: { md: "30px" },
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              variant="p"
              width={{ md: "500px" }}
              height={{ md: "240px" }}
              fontFamily="Readex Pro"
              fontSize={{ xs: "16px", md: "22px" }}
              fontWeight="400"
              lineHeight={{ xs: "22px", md: "40px" }}
              color="#495057"
              textAlign={{ xs: "center", md: "right" }}
              m={0}
              p={{ xs: "10px 20px" }}
            >
              {version.description}
            </Typography>
          </Box>
          <Box direction="row" ml="40px">
            <RwButton
              sx={{ margin: "0 auto 0 0px", padding: "10px 40px !important" }}
              onClick={() => downloadMagazine(version.file)}
            >
              تحميل
            </RwButton>
            <RwButton
              sx={{
                margin: "0 auto 0 15px",
                padding: "10px 40px !important",
                backgroundColor: `${theme.palette.secondary.main} !important`,
                "&:hover": {
                  backgroundColor: `${theme.palette.secondary.dark} !important`,
                },
              }}
              onClick={() => navigate(`/versions/${version.id}`)}
            >
              اقرأ
            </RwButton>
          </Box>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default VersionItem;
