import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ScrollAnimation from "react-scroll-animation-wrapper";
import clsx from "clsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useTranslation } from "next-i18next";
import imgAPI from "~/public/images/imgAPI";
import ProfileCard from "../Cards/Profile";
import useTitle from "../Title/title-style";
import useStyles from "./GEVC-style";
import { Paper } from "@material-ui/core";

import event from "~/public/images/GEVC photo.jpg";
import Button from "@material-ui/core/Button";

import { AiFillCheckSquare } from "react-icons/ai";
import logo2 from "~/public/images/attachment 2.png";

const categories = ["all", "Orthopedic", "Nutritionist", "Pediatric", "Anaesthestic"];

const doctorsData = [
  {
    avatar: imgAPI.medical[7],
    name: "Jena Doe",
    title: "Pediatric Surgeon",
    rating: 95,
    exp: 4,
  },
  {
    avatar: imgAPI.medical[12],
    name: "John Doe",
    title: "Pediatric Surgeon",
    rating: 95,
    exp: 4,
  },
  {
    avatar: imgAPI.medical[8],
    name: "Jihan Doe",
    title: "Pediatric Surgeon",
    rating: 95,
    exp: 4,
  },
  {
    avatar: imgAPI.medical[10],
    name: "James Doe",
    title: "Pediatric Surgeon",
    rating: 95,
    exp: 4,
  },
  {
    avatar: imgAPI.medical[11],
    name: "Jim Doe",
    title: "Pediatric Surgeon",
    rating: 95,
    exp: 4,
  },
  {
    avatar: imgAPI.medical[9],
    name: "Jessy Doe",
    title: "Pediatric Surgeon",
    rating: 95,
    exp: 4,
  },
];

function GEVC() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // Translation Function
  const { t } = useTranslation("common");

  const classes = useStyles();
  const title = useTitle();
  const [selectedIndex, setSelectedIndex] = useState("all");

  function handleListItemClick(event, index) {
    setSelectedIndex(index);
  }

  const renderCard = (item, index) => (
    <ProfileCard
      key={index.toString()}
      name={item.name}
      title={item.title}
      avatar={item.avatar}
      rating={item.rating}
      exp={item.exp}
    />
  );
  return (
    <div className={classes.root} id="GEVC">
      <div style={{ zIndex: "-1" }} className={classes.deco} />

      <Container style={{ zIndex: "1" }}>
        <Grid container spacing={isDesktop ? 3 : 0} justifyContent="center">
          <Grid item lg={4} md={2} xs={12}>
            <div className="w-full flex justify-center mb-4">
              <Paper style={{ width: "200px", padding: "10px" }}>
                <img src={logo2} alt="logo" style={{ width: "100%" }} />
              </Paper>
            </div>
            <div
              style={{ boxShadow: "-6px 5px 12px 13px rgb(0 0 0 / 6%)" }}
              className="sticky w-full h-[250px]  bg-slate-600 top-[-150px] left-[50px] z-50 rounded-r-full rounded-b-full overflow-hidden"
            >
              <img src={event} alt="cover" className="w-full h-full object-cover" />
            </div>
          </Grid>
          <Grid item lg={8} md={10} xs={12}>
            <Paper
              style={{ boxShadow: "-6px 5px 12px 13px rgb(0 0 0 / 6%)" }}
              className="w-full min-h-[300px] text-xl md:text-2xl p-6 z-50"
            >
              The Global Electric Vehicle Challenge® (GEVC) is the newest international
              <span className="italic font-bold text-blue-500"> university competition </span>
              that raises the bar in terms of technology, innovation and engineering skills. Student teams design,
              build, test and race high performance formula-style electric racecars. The GEVC places great emphasis on
              technical innovation, rigorous use of design, analysis and simulation tools in addition to controlled
              testing where applicable. Conversely, the GEVC discourages large budgets and aims to minimize any
              advantages gained through the purchase of high-cost components and materials. These objectives are met in
              two ways:
              <div className="flex gap-2 ml-5 mt-5">
                <AiFillCheckSquare className="w-[20px] h-[20px] min-w-[20px] min-h-[20px] text-blue-400 mt-2" />
                <div className="ml-1">
                  The competition is divided into two stages whereby in stage 1 team submissions are judged and rewarded
                  for their technical innovation, rigorous use of design, analysis and simulation tools, and controlled
                  testing; and
                </div>
              </div>
              <div className="flex gap-2 ml-5 my-5">
                <AiFillCheckSquare className="w-[20px] h-[20px] min-w-[20px] min-h-[20px] text-blue-400 mt-2" />
                <div className="ml-1">
                  Certain components such as motors, controllers, batteries, wheels and tires are specified in the
                  regulations and must be used by all teams.
                </div>
              </div>
              Notwithstanding the aforementioned, there are vast opportunities for creative design and technical
              innovation in the chassis/steering/ suspension design, aerodynamics, battery management, electromechanical
              systems and controls, strategy, telemetry, software engineering, materials science, among others.
              <div className="w-[100%] h-[1px] bg-slate-300 my-4 m-auto" />
              <Button
                size="large"
                variant="contained"
                color="primary"
                href={"https://gevc.globaleee.org/"}
                // className={classes.button}
                className="mt-2 ml-auto"
              >
                More info
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default GEVC;
