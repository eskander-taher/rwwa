import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BGCard from "./BGphoto.jpg";
const BlogsCard = () => {
  return (
    <Card
      sx={{
        height: { xs: "50%", md: "350px" },
        width: { xs: "85%", md: "300px" },
        pb: "0",
        borderRadius: "50px",
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
      }}
    >
      <CardMedia
        sx={{
          height: { xs: "100%", md: "50%" },
          width: { xs: "50%", md: "100%" },
        }}
        image={BGCard}
      />
      <CardContent
        sx={{
          p: "0",
          m: "0",
          height: { xs: "100%", md: "175px" },
          width: { xs: "50%", md: "100%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "space-evenly", md: "space-between" },
          alignItems: "center",
          gap: { xs: "10px", md: "10px" },
          pt: { xs: "15px", md: "0" },
        }}
      >
        <CardContent
          sx={{
            p: "0",
            m: "0",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            justifySelf: "flex-end",
            alignSelf: "flex-end",
            gap: { xs: "10px", md: "5px" },
          }}
        >
          <Box
            width={{ xs: "59px", md: "116px" }}
            height={{ xs: "18px", md: "26px" }}
            sx={{
              border: "1px #DF5E60 solid",
              borderRadius: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              fontFamily="Readex Pro"
              fontSize={{ xs: "14px", md: "16px" }}
              fontWeight="400"
              lineHeight={{ md: "20px" }}
              color=" #DF5E60"
              textAlign="center"
            >
              الصنف
            </Typography>
          </Box>
          <Box
            width={{ xs: "100px", md: "156px" }}
            height={{ xs: "24px", md: "44px" }}
            p={0}
            m={0}
            sx={{
              backgroundColor: "#256C86",
              borderRadius: "50px 0 0 50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: { md: "translateY(-22px)" },
            }}
          >
            <Typography
              variant="h1"
              fontFamily="Readex Pro"
              fontSize={{ xs: "14px", md: "22px" }}
              fontWeight="400"
              lineHeight={{ md: "20px" }}
              color=" #fff"
              textAlign="right"
            >
              عنوان المقال
            </Typography>
          </Box>
        </CardContent>
        <Typography
          variant="p"
          fontSize={{ xs: "12px", md: "16px" }}
          width={{ xs: "90%", md: "266px" }}
          height={{ xs: "70px", md: "67px" }}
          lineHeight={{ xs: "20px", md: "25px" }}
          color="#495057"
          textAlign="right"
        >
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز ...
        </Typography>
        <CardContent
          sx={{
            p: "0",
            m: "0",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: "35px", md: "100px" },
            transform: { md: "translateY(15px)" },
          }}
        >
          <Typography
            fontFamily="Readex Pro"
            fontSize={{ xs: "12px", md: "12px" }}
            lineHeight="15px"
            color="#868E96"
          >
            2023-1-1
          </Typography>
          <Typography
            fontFamily="Readex Pro"
            fontSize={{ xs: "12px", md: "12px" }}
            lineHeight="15px"
            color="#868E96"
          >
            الكاتب: محمد الشرقي
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default BlogsCard;
