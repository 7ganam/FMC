import React from "react";
import clsx from "clsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "next-i18next";
import { useText, useTextAlign } from "~/theme/common";
import imgAPI from "~/public/images/imgAPI";
import TitleDeco from "../Title/WithDecoration";
import useStyles from "./about-style";
import useTitle from "../Title/title-style";
import Counter from "../Counter";

import race from "~/public/images/RACE-.jpg";

function About() {
  const text = useText();
  const align = useTextAlign();

  // Media Query
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // Translation function
  const { t } = useTranslation("common");

  const classes = useStyles();
  const title = useTitle();
  return (
    <div className={classes.root + " mt-[200px]"}>
      <Container fixed>
        <Grid container spacing={isDesktop ? 6 : 2}>
          <Grid item md={5} xs={12}>
            <div className={align.textCenter}>
              <TitleDeco bg={race} text="About" />
            </div>
          </Grid>
          <Grid item md={7} xs={12}>
            <Typography variant="h6">
              The Electric Vehicle Grand Prix® (EVGP) is a hands-on educational program for high school students between
              the ages of 15 to 19. Student teams apply math, science, and engineering to construct and race full-size
              electric cars. The primary goals of the competition are to generate enthusiasm for science and engineering
              at a crucial stage in the educational development of young people, improve their understanding of
              scientific concepts and renewable energy technologies, and encourage them to consider technical careers at
              an early age. It also emphasizes critical thinking, leadership, team work, and project management, while
              educating a new generation of drivers about electric vehicles, hence promoting clean transportation
              options. This competition are gaining popularity among high schools in the US and other parts of the world
              as an exciting new environmentally progressive sport. The electric vehicles are single person,
              lightweight, aerodynamic, high efficiency, electric-motor-driven vehicles with three wheels. They must
              meet specific design and safety rules. They are powered by deep cycle sealed lead acid battery packs not
              exceeding 33 kg (73 pounds). The race is held on a purposebuilt closed track with a minimum length of 0.5
              km. Speeds are software limited through the controller to ensure utmost safety. Teams drive their
              electrically powered vehicles as far as possible for one hour on the closed loop course using only energy
              stored in their batteries. The winner of the EVGP is the team that covers the longest distance in the
              allotted hour. Other awards include Technical Innovation, 3D Printing, among others.
            </Typography>
            <div className="flex flex-row justify-center">
              <a
                target="_blank"
                href="/awards.pdf"
                className="text-2xl font-extrabold hover:underline hover:text-[#357A38]"
              >
                Read More
              </a>
            </div>
            <Counter />
            <blockquote>Held for the second time in the UAE</blockquote>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
