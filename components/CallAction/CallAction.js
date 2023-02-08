import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "next-i18next";
import link from "~/public/text/link";
import useStyles from "./action-style";

function CallAction() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // Translation Function
  const { t } = useTranslation("common");

  const classes = useStyles();
  return (
    <Container fixed={isDesktop}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container alignItems="center">
            <Grid item lg={8} md={7} xs={12}>
              <Typography variant="h4" gutterBottom display="block">
                About the organizers
              </Typography>
              <Typography display="block">
                Global Education Energy Environment (Global EEE) is a US-based 501(c)(3) nonprofit organization
                comprised of a worldwide network of individuals with backgrounds in numerous industries. For over thirty
                years key members of Global EEE have helped organize international student competitions that promote
                Education, Energy efficiency, and Environmental consciousness (the three E’s). We are passionate about
                what we do! Every member of our team has in-depth experience and extensive involvement with student
                competitions either as a past participant or official/organizer. The organization is selective about the
                events it partakes in with the requirement that they must promote the three E’s and are not-for-profit.
              </Typography>
            </Grid>
            <Grid item lg={4} md={5} xs={12}>
              <Grid container justifyContent="flex-end">
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  href={link.medical.contact}
                  className={classes.button}
                >
                  CONTACT US!
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Container>
  );
}

export default CallAction;
