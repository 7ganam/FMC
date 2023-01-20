import React, { useRef, useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Carousel from "react-slick";
import { useTranslation } from "next-i18next";
import TestimonialCard from "../Cards/Testimonial";
import TitleIcon from "../Title/WithIcon";
import imgAPI from "~/public/images/imgAPI";
import useStyle from "./testi-style";

const testiContent = [
  {
    text: "Sed imperdiet enim ligula, vitae viverra justo porta vel.",
    avatar: imgAPI.avatar[10],
    name: "John Doe",
    title: "Chief Digital Officer",
    rating: 5,
  },
  {
    text: "Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.",
    avatar: imgAPI.avatar[1],
    name: "Jean Doe",
    title: "Chief Digital Officer",
    rating: 4,
  },
  {
    text: "Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.",
    avatar: imgAPI.avatar[2],
    name: "Jena Doe",
    title: "Graphic Designer",
    rating: 4,
  },
  {
    text: "Sed imperdiet enim ligula, vitae viverra justo porta vel.",
    avatar: imgAPI.avatar[3],
    name: "Jovelin Doe",
    title: "Senior Graphic Designer",
    rating: 3,
  },
  {
    text: "Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.",
    avatar: imgAPI.avatar[4],
    name: "Jihan Doe",
    title: "CEO Software House",
    rating: 5,
  },
  {
    text: "Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.",
    avatar: imgAPI.avatar[6],
    name: "Jovelin Doe",
    title: "Senior Graphic Designer",
    rating: 5,
  },
  {
    text: "Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.",
    avatar: imgAPI.avatar[7],
    name: "John Doe",
    title: "Senior Graphic Designer",
    rating: 4,
  },
  {
    text: "Sed imperdiet enim ligula, vitae viverra justo porta vel.",
    avatar: imgAPI.avatar[10],
    name: "John Doe",
    title: "Chief Digital Officer",
    rating: 5,
  },
  {
    text: "Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.",
    avatar: imgAPI.avatar[1],
    name: "Jean Doe",
    title: "Chief Digital Officer",
    rating: 4,
  },
];

function Testimonials() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const classes = useStyle();

  // Carousel Setting
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Translation function
  const { t } = useTranslation("common");

  return (
    <div className={classes.root}>
      <div className={classes.floatingTitle}>
        <Container fixed>
          <div className={classes.title}>
            <TitleIcon icon="format_quote" />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Testimonials;
