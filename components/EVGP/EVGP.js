import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { AppBar, Grid, withStyles } from "@material-ui/core";
import useStyles from "./EVGP-style";

import event from "~/public/images/EVGP photo.jpg";
import logo1 from "~/public/images/attachment 1.png";

const styles = (theme) => ({
  item1: {
    order: 2,
    [theme.breakpoints.up("md")]: {
      order: 1,
    },
  },
  item2: {
    order: 1,
    [theme.breakpoints.up("md")]: {
      order: 2,
    },
  },
});

function EVGP(props) {
  // eslint-disable-next-line react/prop-types
  const { classes: classes2 } = props;
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // Translation Function

  const classes = useStyles();

  return (
    <div className={classes.root} id="EVGP">
      <div style={{ zIndex: "-1" }} className={classes.deco} />

      <Container style={{ zIndex: "1" }}>
        <Grid container spacing={isDesktop ? 3 : 0} justifyContent="center">
          <Grid item lg={8} md={10} xs={12} className={classes2.item1}>
            <Paper
              style={{ boxShadow: "-6px 5px 12px 13px rgb(0 0 0 / 6%)" }}
              className="w-full min-h-[300px] text-xl md:text-2xl p-6 z-50"
            >
              The Electric Vehicle Grand Prix® (EVGP) is a hands-on educational program for
              <span className="italic font-bold text-blue-500"> high school students </span>
              between the ages of 15 to 19. Student teams apply math, science, and engineering to construct and race
              full-size electric cars. The primary goals of the competition are to generate enthusiasm for science and
              engineering at a crucial stage in the educational development of young people, improve their understanding
              of scientific concepts and renewable energy technologies, and encourage them to consider technical careers
              at an early age. It also emphasizes critical thinking, leadership, team work, and project management,
              while educating a new generation of drivers about electric vehicles hence promoting clean transportation
              options. These competitions are gaining popularity among high schools in the US and other parts of the
              world as an exciting new environmentally progressive sport. The electric vehicles are single person,
              lightweight, aerodynamic, high efficiency, electric-motor-driven vehicles with three wheels. They must
              meet specific design and safety rules. They are powered by deep cycle sealed lead acid battery packs not
              exceeding 33 kg (73 pounds). The race is held on a purpose-built closed track with a minimum length of
              0.25 miles. Speeds are software limited through the controller to insure utmost safety. Teams drive their
              electrically powered vehicles as far as possible for one hour on the closed loop course using only energy
              stored in their batteries. The winner of the EVGP is the team that covers the longest distance in the
              allotted hour. Other awards include Technical Innovation, 3D Printing, among others.
              <div className="w-[100%] h-[1px] bg-slate-300 my-4 m-auto" />
              <a href="/About EVGP.pdf" target="_blank">
                <Button size="large" variant="contained" color="primary" className="mt-2 ml-auto">
                  More info
                </Button>
              </a>
            </Paper>
          </Grid>
          <Grid item lg={4} md={2} xs={12} className={classes2.item2}>
            <div className="w-full flex justify-center mb-4">
              <Paper style={{ width: "200px", padding: "10px" }}>
                <img src={logo1} alt="logo" style={{ width: "100%" }} />
              </Paper>
            </div>
            <div
              style={{ boxShadow: "-6px 5px 12px 13px rgb(0 0 0 / 6%)" }}
              className="sticky w-full h-[250px]  bg-slate-600 top-[-150px] left-[50px] z-50 md:rounded-r-full md:rounded-b-full overflow-hidden"
            >
              <img src={event} alt="cover" className="w-full h-full object-cover" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default withStyles(styles)(EVGP);
