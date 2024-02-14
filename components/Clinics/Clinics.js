import React from "react";
import PropTypes from "prop-types";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react18";
import { useTranslation } from "next-i18next";
import { AiFillCheckSquare } from "react-icons/ai";
import ParallaxOval from "../Parallax/Oval";
import useText from "../Title/title-style";
import useStyles from "./clinics-style";

function MapContainer(props) {
  const { google } = props;
  return (
    <Map
      google={google}
      style={{ width: "100%", height: "500px", position: "relative" }}
      initialCenter={{ lat: 24.419652, lng: 54.329171 }}
      zoom={12}
    >
      <Marker position={{ lat: 24.419652, lng: 54.329171 }} />
    </Map>
  );
}

MapContainer.propTypes = {
  google: PropTypes.object.isRequired,
};

const MapWithAMarker = GoogleApiWrapper({ apiKey: "AIzaSyBobPrpAfV2cyTVn2HkmTrG4SMLx-jdy-U" })(MapContainer);

function MapAdress() {
  // Theme breakpoints
  const theme = useTheme();
  const text = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  // Translation Function
  const { t } = useTranslation("common");
  const classes = useStyles();
  return (
    <div className={classes.root} id="location">
      <div className={classes.parallaxBottom}>
        <ParallaxOval />
      </div>
      <Container fixed>
        <Grid container spacing={6}>
          {isDesktop && <Grid item lg={1} />}
          <Grid item lg={5} md={6} xs={12}>
            <Box mt={5}>
              <Typography variant="h4" className={text.primary}>
                Venue <span className="lowercase">and</span> Location
              </Typography>
            </Box>
            <div className="text-xl">
              <div className="flex gap-2 mt-1 ml-3">
                <AiFillCheckSquare className="w-[20px] h-[20px] min-w-[20px] min-h-[20px] text-blue-400" />
                <div className="ml-3 text-xl">
                  The UAE Electric Vehicle Grand Prix will be held at Al Forsan International Kart Circuit in Abu Dhabi,
                  UAE on a 1.5 km world class track.
                </div>
              </div>
              <div className="flex gap-2 mt-4 ml-3">
                <AiFillCheckSquare className="w-[20px] h-[20px] min-w-[20px] min-h-[20px] text-blue-400" />
                <div className="ml-3 text-2l">
                  Guests will have the opportunity to visit the team garages and get an up-close look at the cars to
                  learn about the participating teams as well as our partners and sponsors.
                </div>
              </div>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <Paper className={classes.map} elevation={10}>
              <MapWithAMarker
                googleMapURL="https://maps.app.goo.gl/jBwoF4sVfeDpkRhz5"
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "500px" }} />}
                mapElement={<div style={{ height: "100%" }} />}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MapAdress;
