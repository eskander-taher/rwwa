import React from "react";
import BlogList from "./BlogList";

import { Typography, Box, Grid, Container } from "@mui/material";
import { Stack } from "@mui/system";
import BgBlogs from "./BgBlogs.jpg";
import Profile from "./Profile.jpg";
import BlogsCard from "./BlogsCard";
import Section from "../UI/Section";

const Blog = () => {
  const PStyle = {
    textAlign: "right",
    fontSize: { xs: "14px", md: "18px" },
    lineHeight: { xs: "25px", md: "35px" },
    color: "#343A40",
  };
  return (
    <Grid
      display="flex"
      width={{ xs: "100%" }}
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={{ xs: "20px", md: "50px" }}
      m="0"
      p="0"
    >
      <Stack
        height={{ xs: "400px", md: "647px" }}
        width="100%"
        spacing={{ xs: 15, md: 40 }}
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        sx={{ background: `url(${BgBlogs})`, backgroundSize: "contain" }}
      >
        <Box
          height={{ xs: "80px", md: "150px" }}
          width={{ xs: "150px", md: "300px" }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: { xs: "10px", md: "20px" },
          }}
        >
          <Typography color="#fff" fontSize={{ xs: "14px", md: "24px" }}>
            د/ محمد الشرقي
          </Typography>
          <Typography color="#fff" fontSize={{ xs: "14px", md: "24px" }}>
            13-01-2023
          </Typography>
        </Box>
        <Box
          height={{ xs: "125px", md: "250px" }}
          width={{ xs: "150px", md: "600px" }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            height={{ xs: "45px", md: "90px" }}
            width={{ xs: "200px", md: "500px" }}
            bgcolor="#1C6580"
            sx={{
              justifySelf: "flex-end",
              alignSelf: "flex-end",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50px",
            }}
          >
            <Typography color="#fff" fontSize={{ xs: "20px", md: "46px" }}>
              الدولار يحكم الاقتصاد
            </Typography>
          </Box>
          <Box
            height={{ xs: "30px", md: "60px" }}
            width={{ xs: "75px", md: "150px" }}
            bgcolor="#DF5E60"
            sx={{
              justifySelf: "flex-end",
              alignSelf: "flex-end",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50px",
            }}
          >
            <Typography color="#fff" fontSize={{ xs: "16px", md: "28px" }}>
              اقتصاد
            </Typography>
          </Box>
        </Box>
      </Stack>
      <Container>
        <Stack
          // height={{ xs: "1850px", md: "1450px" }}
          // width={{ xs: "85%" }}
          direction="column"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pb={{ xs: "15px", md: "30px" }}
        >
          <Typography variant="p" sx={PStyle}>
            جلة متنوعة دورية في المجال الاقتصادي والعلمي والنفسي والثقافي ،
            موجهه لكل شغوف بالمعرفة بشتى مجالاتها، تُصدر كل شهرين بطابع حديث
            ينافس المجلات العربية الخارجية، حيث توزع مجاناً في كل إصدار بعدة
            نقاط بالجمهورية اليمنية ، وتنشر إلكترونياً في معظم الدول العربية،
            تحتوي على إثنين وعشرون قسم مُختلف، بعيداً عن ضوضاء وجدل السياسية،
            الهدف من ذلك رفع مستوى الوعي والثقافة لدى فئة الشباب في عّدة مجالات
            مُختلفة بصورة مُبسطه و ممتعة .مجلة متنوعة دورية في المجال الاقتصادي
            والعلمي والنفسي والثقافي ، موجهه لكل شغوف بالمعرفة بشتى مجالاتها،
            تُصدر كل شهرين بطابع حديث ينافس المجلات العربية الخارجية، حيث توزع
            مجاناً في كل إصدار بعدة نقاط بالجمهورية
          </Typography>
          <Typography variant="p" sx={PStyle}>
            جلة متنوعة دورية في المجال الاقتصادي والعلمي والنفسي والثقافي ،
            موجهه لكل شغوف بالمعرفة بشتى مجالاتها، تُصدر كل شهرين بطابع حديث
            ينافس المجلات العربية الخارجية، حيث توزع مجاناً في كل إصدار بعدة
            نقاط بالجمهورية اليمنية ، وتنشر إلكترونياً في معظم الدول العربية،
            تحتوي على إثنين وعشرون قسم مُختلف، بعيداً عن ضوضاء وجدل السياسية،
            الهدف من ذلك رفع مستوى الوعي والثقافة لدى فئة الشباب في عّدة مجالات
            مُختلفة بصورة مُبسطه و ممتعة .مجلة متنوعة دورية في المجال الاقتصادي
            والعلمي والنفسي والثقافي ، موجهه لكل شغوف بالمعرفة بشتى مجالاتها،
            تُصدر كل شهرين بطابع حديث ينافس المجلات العربية الخارجية، حيث توزع
            مجاناً في كل إصدار بعدة نقاط بالجمهورية
          </Typography>
          <Typography variant="p" sx={PStyle}>
            جلة متنوعة دورية في المجال الاقتصادي والعلمي والنفسي والثقافي ،
            موجهه لكل شغوف بالمعرفة بشتى مجالاتها، تُصدر كل شهرين بطابع حديث
            ينافس المجلات العربية الخارجية، حيث توزع مجاناً في كل إصدار بعدة
            نقاط بالجمهورية اليمنية ، وتنشر إلكترونياً في معظم الدول العربية،
            تحتوي على إثنين وعشرون قسم مُختلف، بعيداً عن ضوضاء وجدل السياسية،
            الهدف من ذلك رفع مستوى الوعي والثقافة لدى فئة الشباب في عّدة مجالات
            مُختلفة بصورة مُبسطه و ممتعة .مجلة متنوعة دورية في المجال الاقتصادي
            والعلمي والنفسي والثقافي ، موجهه لكل شغوف بالمعرفة بشتى مجالاتها،
            تُصدر كل شهرين بطابع حديث ينافس المجلات العربية الخارجية، حيث توزع
            مجاناً في كل إصدار بعدة نقاط بالجمهورية
          </Typography>
          <Typography variant="p" sx={PStyle}>
            جلة متنوعة دورية في المجال الاقتصادي والعلمي والنفسي والثقافي ،
            موجهه لكل شغوف بالمعرفة بشتى مجالاتها، تُصدر كل شهرين بطابع حديث
            ينافس المجلات العربية الخارجية، حيث توزع مجاناً في كل إصدار بعدة
            نقاط بالجمهورية اليمنية ، وتنشر إلكترونياً في معظم الدول العربية،
            تحتوي على إثنين وعشرون قسم مُختلف، بعيداً عن ضوضاء وجدل السياسية،
            الهدف من ذلك رفع مستوى الوعي والثقافة لدى فئة الشباب في عّدة مجالات
            مُختلفة بصورة مُبسطه و ممتعة .مجلة متنوعة دورية في المجال الاقتصادي
            والعلمي والنفسي والثقافي ، موجهه لكل شغوف بالمعرفة بشتى مجالاتها،
            تُصدر كل شهرين بطابع حديث ينافس المجلات العربية الخارجية، حيث توزع
            مجاناً في كل إصدار بعدة نقاط بالجمهورية
          </Typography>
          <Typography variant="p" sx={PStyle}>
            جلة متنوعة دورية في المجال الاقتصادي والعلمي والنفسي والثقافي ،
            موجهه لكل شغوف بالمعرفة بشتى مجالاتها، تُصدر كل شهرين بطابع حديث
            ينافس المجلات العربية الخارجية، حيث توزع مجاناً في كل إصدار بعدة
            نقاط بالجمهورية اليمنية ، وتنشر إلكترونياً في معظم الدول العربية،
            تحتوي على إثنين وعشرون قسم مُختلف، بعيداً عن ضوضاء وجدل السياسية،
            الهدف من ذلك رفع مستوى الوعي والثقافة لدى فئة الشباب في عّدة مجالات
            مُختلفة بصورة مُبسطه و ممتعة .مجلة متنوعة دورية في المجال الاقتصادي
            والعلمي والنفسي والثقافي ، موجهه لكل شغوف بالمعرفة بشتى مجالاتها،
            تُصدر كل شهرين بطابع حديث ينافس المجلات العربية الخارجية، حيث توزع
            مجاناً في كل إصدار بعدة نقاط بالجمهورية
          </Typography>
          <Typography variant="p" sx={PStyle}>
            جلة متنوعة دورية في المجال الاقتصادي والعلمي والنفسي والثقافي ،
            موجهه لكل شغوف بالمعرفة بشتى مجالاتها، تُصدر كل شهرين بطابع حديث
            ينافس المجلات العربية الخارجية، حيث توزع مجاناً في كل إصدار بعدة
            نقاط بالجمهورية اليمنية ، وتنشر إلكترونياً في معظم الدول العربية،
            تحتوي على إثنين وعشرون قسم مُختلف، بعيداً عن ضوضاء وجدل السياسية،
            الهدف من ذلك رفع مستوى الوعي والثقافة لدى فئة الشباب في عّدة مجالات
            مُختلفة بصورة مُبسطه و ممتعة .مجلة متنوعة دورية في المجال الاقتصادي
            والعلمي والنفسي والثقافي ، موجهه لكل شغوف بالمعرفة بشتى مجالاتها،
            تُصدر كل شهرين بطابع حديث ينافس المجلات العربية الخارجية، حيث توزع
            مجاناً في كل إصدار بعدة نقاط بالجمهورية
          </Typography>
          <Typography variant="p" sx={PStyle}>
            جلة متنوعة دورية في المجال الاقتصادي والعلمي والنفسي والثقافي ،
            موجهه لكل شغوف بالمعرفة بشتى مجالاتها، تُصدر كل شهرين بطابع حديث
            ينافس المجلات العربية الخارجية، حيث توزع مجاناً في كل إصدار بعدة
            نقاط بالجمهورية اليمنية ، وتنشر إلكترونياً في معظم الدول العربية،
            تحتوي على إثنين وعشرون قسم مُختلف، بعيداً عن ضوضاء وجدل السياسية،
            الهدف من ذلك رفع مستوى الوعي والثقافة لدى فئة الشباب في عّدة مجالات
            مُختلفة بصورة مُبسطه و ممتعة .مجلة متنوعة دورية في المجال الاقتصادي
            والعلمي والنفسي والثقافي ، موجهه لكل شغوف بالمعرفة بشتى مجالاتها،
            تُصدر كل شهرين بطابع حديث ينافس المجلات العربية الخارجية، حيث توزع
            مجاناً في كل إصدار بعدة نقاط بالجمهورية
          </Typography>
        </Stack>
      </Container>
      <Container>
        <Stack
          // height={{ xs: "125px", md: "250px" }}
          // width={{ xs: "85%", md: "1278px" }}
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          width="100%"
          gap={{ xs: "20px", md: "40px" }}
          sx={{ justifySelf: "flex-end", alignSelf: "right" }}
        >
          <Typography
            textAlign="right"
            fontSize={{ xs: "14px", md: "28px" }}
            fontWeight="400"
            lineHeight={{ xs: "20px", md: "35px" }}
            color="#343A40"
          >
            الكاتب/ محمد الشرقي
          </Typography>
          <Box
            height={{ xs: "100px", md: "250px" }}
            width={{ xs: "100px", md: "250px" }}
            sx={{
              background: `url(${Profile})`,
              backgroundSize: "contain",
              backgroundRepeat: "none",
              borderRadius: "50%",
              justifySelf: "flex-end",
            }}
          ></Box>
        </Stack>
      </Container>
      <Stack
        // height={{ xs: "750px", md: "500px" }}
        direction="column"
        spacing={{ xs: 3, md: 5 }}
        margin="40px 0"
      >
        <Typography
          textAlign={{ xs: "center", md: "right" }}
          fontSize={{ xs: "16px", md: "32px" }}
          lineHeight="40px"
          justifyContent="space-around"
          color="#343A40"
        >
          : مقالات شبيهة
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: "30px", md: "100px" },
          }}
        >
          <BlogsCard />
          <BlogsCard />
        </Box>
      </Stack>
    </Grid>
  );
};

export default Blog;
