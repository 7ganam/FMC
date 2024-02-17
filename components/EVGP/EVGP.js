import React from "react";
import { Paper } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Grid, withStyles } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import useStyles from "./EVGP-style";
import event from "~/public/images/EVGP photo.jpg";

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
              className="w-full min-h-[300px] text-xl md:text-2xl p-6 z-50 flex flex-col gap-4 text-justify"
            >
              <p>
                The EV Grand Prix vehicles are single person, lightweight, aerodynamic, high efficiency, electric
                vehicles with three wheels. They must meet specific design and safety rules, and are powered by deep
                cycle lead acid battery packs not exceeding 33 kg. Teams have the choice of acquiring basic kits
                comprised of all the major components they need to build the cars. This includes the chassis with roll
                hoop, outer shell, canopy, motor, controller, batteries, throttle pedal, wheels, tires, wiring, etc.
                There is still a significant amount of engineering required to determine how to best integrate these
                components to achieve the highest reliability and efficiency possible. Teams may also redesign or
                substitute any part of the kit with the exception of the batteries. The goal is to encourage the
                students to innovate and experiment with different technologies, while meeting the basic rule of a
                limited energy source and storage.
              </p>
              <p>
                Unlike other types of conventional car races, the EV Grand Prix is focused on demonstrating the highest
                levels of efficiency and energy management. The primary objective is to travel the longest distance in a
                fixed amount of time and with a fixed amount of energy. The cars are equipped with battery packs capable
                of storing approximately one kW-hr of energy.
              </p>
              <p>
                When the competition begins, the battery packs are expected to be fully charged, hence all the cars
                start with the same amount of stored electrical energy. The teams race for two sessions (heats), each
                half an hour in length. During each session, they must change drivers once around the 15 minute mark.
              </p>
              {/* <div className="w-[100%] h-[1px] bg-slate-300 my-4 m-auto" /> */}
            </Paper>
          </Grid>
          <Grid item lg={4} md={2} xs={12} className={classes2.item2}>
            <div
              style={{ boxShadow: "-6px 5px 12px 13px rgb(0 0 0 / 6%)" }}
              className="w-full h-[250px]  bg-slate-600 top-[-150px] left-[50px] z-50 md:rounded-r-full md:rounded-b-full overflow-hidden"
            >
              <img src={event} alt="cover" className="object-cover w-full h-full" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/EV-Schematic.png" className="h-[500px]" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default withStyles(styles)(EVGP);
