import { useTheme } from "@emotion/react";
import { Box, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import RwButton from "../../components/UI/RwButton";
import Section from "../../components/UI/Section";
// import Logo from "./logo.jpg";
const AboutSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Section
      sx={{ backgroundColor: "#DF5E60", color: "#fff", paddingTop: "20px" }}
      header="عن رؤى"
      container
      headerStyle={{ color: "#fff" }}
    >
      <Grid
        color="#FFFFFF"
        container
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 0 }}
        justifyContent="center"
        alignItems="center"
        gap={{ xs: "5px" }}
      >
        <Stack
          pb={{ sx: "0", md: "100px" }}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width={{ xs: "150px", md: "300px" }}
            height={{ xs: "150px", md: "300px" }}
            sx={{
              borderRadius: "50px",
              background: `url('./images/logo.png')`,
              backgroundSize: "cover",
              backgroundColor: "#fff",
            }}
          ></Box>
        </Stack>
        <Stack
          width={{ sx: "300px", md: "726px" }}
          // height="440px"
          display="flex"
          flexDirection="column"
          gap={{ xs: "10px", md: "40px" }}
          alignItems={{ xs: "center", md: "flex-end" }}
          p={{ xs: "20px" }}
        >
          <Typography
            variant="p"
            fontSize={{ sx: "12px", md: "18px" }}
            fontWeight="400"
            textAlign={{ xs: "center", md: "right" }}
            lineHeight="40px"
          >
            مجلة متنوعة دورية في المجال الاقتصادي والعلمي والنفسي والثقافي ،
            موجهه لكل شغوف بالمعرفة بشتى مجالاتها، تُصدر كل شهرين بطابع حديث
            ينافس المجلات العربية الخارجية، حيث توزع مجاناً في كل إصدار بعدة
            نقاط بالجمهورية اليمنية ، وتنشر إلكترونياً في معظم الدول العربية،
            تحتوي على إثنين وعشرون قسم مُختلف، بعيداً عن ضوضاء وجدل السياسية،
            الهدف من ذلك رفع مستوى الوعي والثقافة لدى فئة الشباب في عّدة مجالات
            مُختلفة بصورة مُبسطه و ممتعة .
          </Typography>
          <RwButton
            variant="contained"
            sx={{
              backgroundColor: `${theme.palette.secondary.main} !important`,
            }}
            onClick={() => navigate("/about/who-are-we")}
          >
            <Typography fontSize={{ sx: "12px", md: "25px" }} fontWeight="700">
              المزيد عن رؤى
            </Typography>
          </RwButton>
        </Stack>
      </Grid>
    </Section>
  );
};

export default AboutSection;
