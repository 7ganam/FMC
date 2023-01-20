import React, { useEffect, useRef } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import Carousel from "react-slick";
import PrevIcon from "@material-ui/icons/ArrowBack";
import NextIcon from "@material-ui/icons/ArrowForward";
import { useTranslation } from "next-i18next";
import imgApi from "~/public/images/imgAPI";
import useStyles from "./details-style";
import TitleIcon from "../Title/WithIcon";
import Card from "../Cards/Default";
import DotsParallax from "../Parallax/Dots";
import { Paper } from "@material-ui/core";

import event from "~/public/images/Event-min.jpg";

const detailList = [
  {
    title: "Lorem Ipsum",
    desc: "Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.",
    img: imgApi.medical[3],
  },
  {
    title: "Etiam rhoncus",
    desc: "Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.",
    img: imgApi.medical[6],
  },
  {
    title: "Duis fermentum",
    desc: "Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.",
    img: imgApi.medical[5],
  },
  {
    title: "Lorem Ipsum",
    desc: "Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.",
    img: imgApi.medical[4],
  },
  {
    title: "Etiam rhoncus",
    desc: "Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.",
    img: imgApi.medical[3],
  },
  {
    title: "Duis fermentum",
    desc: "Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.",
    img: imgApi.medical[2],
  },
];

function Details() {
  const { t } = useTranslation("common");
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const classes = useStyles();
  const slider = useRef(null);
  const settings = {
    dots: false,
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
          slidesToShow: 3,
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

  return (
    <div className={classes.root}>
      <DotsParallax />
      <div className={classes.carouselHandle}>
        <div style={{ overflow: "visible" }} className={classes.carouselWrap}>
          <Paper
            style={{ boxShadow: "-6px 5px 12px 13px rgb(0 0 0 / 6%);" }}
            className=" lg:ml-[20vw] w-[800px] min-h-[400px] max-w-[90%] m-auto md:my-[170px] relative my-[200px]"
          >
            <div className="w-[400px] h-[300px] absolute bg-slate-600 top-[-150px] left-[50px] z-50 rounded-r-full rounded-b-full overflow-hidden">
              <img src={event} alt="cover" className="w-full h-full object-fill" />
            </div>
            <div className="h-[140px]"></div>
            <div className="text-xl md:text-2xl p-6 mt-3">
              The ADU FMC is open to the public, and is a wonderful way for children of all ages and adults to spend a
              Saturday afternoon cheering on the teams, learning about electric vehicles and marveling at the ingenuity
              and hard work of the students. In the morning our international technical experts will conduct car safety
              inspections and driver weight in, and the teams will have a chance to do their final testing and practice
              on the track. Racing will begin at 1:00 PM and will consist of several heats for both challenges.
            </div>
          </Paper>
        </div>
      </div>
      <div className={classes.floatingTitle}>
        <Container fixed>
          <div className={classes.title}>
            <TitleIcon text={t("medical-landing.details_title")} icon="library_add" extended />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Details;
