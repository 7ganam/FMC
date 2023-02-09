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
              <TitleDeco bg={race} text="About Us" />
            </div>
          </Grid>
          <Grid item md={7} xs={12}>
            <Typography className={clsx(title.default, text.subtitle)} variant="h4">
              The ADU Future Mobility Challenge (FMC) consists of the Electric Vehicle Grand Prix (EVGP) for high
              schools and the Global Electric Vehicle Challenge (GEVC) for universities in which students design, build,
              test and race single person electric cars.
            </Typography>
            <Counter />
            <blockquote>Held for the first time in the UAE</blockquote>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
