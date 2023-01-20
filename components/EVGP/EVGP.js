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
import useStyles from "./EVGP-style";
import { Paper } from "@material-ui/core";

import event from "~/public/images/attachment 3.jpg";
import Button from "@material-ui/core/Button";

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

function EVGP() {
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
    <div className={classes.root} id="EVGP">
      <div style={{ zIndex: "-1" }} className={classes.deco} />

      <Container style={{ zIndex: "1" }}>
        <Grid container spacing={isDesktop ? 3 : 0} justifyContent="center">
          <Grid item lg={8} md={10} xs={12}>
            <Paper
              style={{ boxShadow: "-6px 5px 12px 13px rgb(0 0 0 / 6%)" }}
              className="w-full min-h-[300px] text-xl md:text-2xl p-6 z-50"
            >
              The Electric Vehicle Grand Prix® (EVGP) is a hands-on educational program for high school students between
              the ages of 15 to 19. Student teams apply math, science, and engineering to construct and race full-size
              electric cars. The primary goals of the competition are to generate enthusiasm for science and engineering
              at a crucial stage in the educational development of young people, improve their understanding of
              scientific concepts and renewable energy technologies, and encourage them to consider technical careers at
              an early age. It also emphasizes critical thinking, leadership, team work, and project management, while
              educating a new generation of drivers about electric vehicles hence promoting clean transportation
              options. These competitions are gaining popularity among high schools in the US and other parts of the
              world as an exciting new environmentally progressive sport. The electric vehicles are single person,
              lightweight, aerodynamic, high efficiency, electric-motor-driven vehicles with three wheels. They must
              meet specific design and safety rules. They are powered by deep cycle sealed lead acid battery packs not
              exceeding 33 kg (73 pounds). The race is held on a purpose-built closed track with a minimum length of
              0.25 miles. Speeds are software limited through the controller to insure utmost safety. Teams drive their
              electrically powered vehicles as far as possible for one hour on the closed loop course using only energy
              stored in their batteries. The winner of the EVGP is the team that covers the longest distance in the
              allotted hour.
              <div className="w-[100%] h-[1px] bg-slate-300 my-4 m-auto"></div>
              <Button
                size="large"
                variant="contained"
                color="primary"
                href={"https://globaleee.org/"}
                // className={classes.button}
                className="mt-2 ml-auto"
              >
                More info
              </Button>
            </Paper>
          </Grid>
          <Grid item lg={4} md={2} xs={12}>
            <Typography variant="h4" className={title.primary}>
              {"The Electric Vehicle Grand Prix®"}
            </Typography>
            <div
              style={{ boxShadow: "-6px 5px 12px 13px rgb(0 0 0 / 6%)" }}
              className="sticky w-full h-[250px]  bg-slate-600 top-[-150px] left-[50px] z-50 rounded-r-full rounded-b-full overflow-hidden"
            >
              <img src={event} alt="cover" className="w-full h-full object-cover" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

//react component that has a div that scales up on hover

export default EVGP;
