import { Box, IconButton, SliderTrack, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Container } from "@mui/system";
import styled from "@emotion/styled";

const slides = [
  {
    img: "BGphoto.jpg",
    id:1,
  },
  {
    img: "photo1.jpeg",
    id:2,
  },
  {
    img: "photo2.jpg",
    id: 3,
  },
  {
    img: "photo3.jpg",
    id: 4,
  },
];

const activeSlide = {
  opacity: "1 !important",
  transform: "translateX(0)",
  zIndex: 1,
};

const lastSlide = {
  transform: "translateX(-100%)",
  zIndex: -1,
};
const nextSlide = {
  transform: "translateX(100%)",
  zIndex: -1,
};

const Slide = styled(Box)((props) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  transition: "0.5s ease",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  // opacity: 0,
}));

const SliderIconButton = styled((props) => (
  <IconButton disableRipple {...props} />
))(({ theme }) => ({
  position: "absolute",
  top: "50%",
  color: "#fff",
  zIndex: 1,
}));

const HeroSlider = () => {
  const [index, setIndex] = useState(2);

  const moveNextSlide = () => {
    setIndex((oldIndex) => {
      const result = (oldIndex + 1) % slides.length;
      return result;
    });
  };
  const movePrevSlide = () => {
    setIndex((oldIndex) => {
      const result = (oldIndex - 1 + slides.length) % slides.length;
      return result;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        const result = (oldIndex + 1) % slides.length;
        return result;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <Stack
      flexDirection="row"
      sx={{
        maxWidth: "100%",
        height: "calc(100vh - 70px)",
        overflowX: "hidden !important",
        position: "relative",
      }}
    >
      {slides.map((slide, slideIndex) => {
        let position = nextSlide;
        if (slideIndex === index) {
          position = activeSlide;
        }
        if (
          slideIndex === index - 1 ||
          (index === 0 && slideIndex === slides.length - 1)
        ) {
          position = lastSlide;
        }

        return (
          <Slide
            key={slide.id}
            sx={{
              background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(./images/${slide.img})`,
              ...position,
            }}
          ></Slide>
        );
      })}
      <Container sx={{ position: "relative" }}>
        <SliderIconButton sx={{ left: 0 }} onClick={moveNextSlide}>
          <ArrowBackIosIcon sx={{ fontSize: "32px" }} />
        </SliderIconButton>
        <SliderIconButton sx={{ right: 0 }} onClick={movePrevSlide}>
          <ArrowForwardIosIcon sx={{ fontSize: "32px" }} />
        </SliderIconButton>
      </Container>
    </Stack>
  );
};

export default HeroSlider;
