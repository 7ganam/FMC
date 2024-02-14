import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import useStyles from "./counter-style";

function Counter() {
  const { t } = useTranslation("common");
  const classes = useStyles();
  return (
    <div className={classes.counterWrap}>
      <Container fixed>
        <Grid container justifyContent="center" alignItems="center" spacing={1}>
          <Grid sm={4} item>
            <div className={clsx(classes.counterItem, classes.deco)}>
              <div className={classes.text}>
                <Typography variant="h3">3</Typography>
                <Typography component="p" style={{ fontSize: "18px" }}>
                  Emirates
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid sm={4} item>
            <div className={clsx(classes.counterItem, classes.deco)}>
              <div className={classes.text}>
                <Typography variant="h3">4</Typography>
                <Typography component="p" style={{ fontSize: "18px" }}>
                  Countries
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid sm={4} item>
            <div className={clsx(classes.counterItem, classes.deco)}>
              <div className={classes.text}>
                <Typography variant="h3">28</Typography>
                <Typography component="p" style={{ fontSize: "18px" }}>
                  Teams
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid sm={4} item>
            <div className={classes.counterItem + " mt-5"}>
              <div className={classes.text}>
                <Typography variant="h2">500+</Typography>
                Students
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Counter;
