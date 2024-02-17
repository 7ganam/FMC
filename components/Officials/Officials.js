import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { AppBar, Grid, withStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import useStyles from "./Officials-style";
import Typography from "@material-ui/core/Typography";

import event from "~/public/images/OfficialsPhoto.png";
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

function Officials(props) {
  // eslint-disable-next-line react/prop-types
  const { classes: classes2 } = props;

  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // Translation Function

  const classes = useStyles();

  return (
    <div className={classes.root} id="officials">
      <div style={{ zIndex: "-1" }} className={classes.deco} />

      <Container style={{ zIndex: "1" }}>
        <Grid container spacing={isDesktop ? 3 : 0} justifyContent="center">
          <Grid item lg={8} md={8} xs={12} className={classes2.item1}>
            <Paper
              style={{ boxShadow: "-6px 5px 12px 13px rgb(0 0 0 / 6%)" }}
              className="w-full min-h-[300px] text-xl md:text-2xl p-6 z-50"
            >
              Global EEE competitions are supported by a team of professionals from across a broad spectrum of
              industries around the world offering their technical expertise to the participating teams and helping
              develop and enforce the rules and regulations during the competitions. The cars undergo a rigorous
              technical inspection prior to their participation on race day, and continue to be monitored throughout the
              event to ensure their compliance with the regulations.
              <div className="w-[100%] h-[1px] bg-slate-300 my-4 m-auto placeholder:" />
              Meet some of our team
              <a
                href="https://gevc.globaleee.org/officials.php"
                target="_blank"
                className="font-bold  text-blue-500"
                rel="noreferrer"
              >
                {"  here."}
              </a>
            </Paper>
          </Grid>
          <Grid item lg={4} md={4} xs={12} className={classes2.item2}>
            <div className="my-4 mx-4">
              {" "}
              <Typography variant="h4">
                Officials and <div>Technical Experts</div>
              </Typography>
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

export default withStyles(styles)(Officials);
