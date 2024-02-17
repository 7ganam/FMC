import React from "react";
import Container from "@material-ui/core/Container";
import { useTranslation } from "next-i18next";
import { Paper } from "@material-ui/core";
import useStyles from "./details-style";
import TitleIcon from "../Title/WithIcon";
import DotsParallax from "../Parallax/Dots";
import Button from "@material-ui/core/Button";

import event from "~/public/images/Event-min.jpg";

function Details() {
  const { t } = useTranslation("common");
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DotsParallax />
      <div className={classes.carouselHandle}>
        <div style={{ overflow: "visible" }} className={classes.carouselWrap}>
          <Paper
            style={{ boxShadow: "-6px 5px 12px 13px rgb(0 0 0 / 6%);" }}
            className=" lg:ml-[20vw] w-[800px] min-h-[400px] max-w-[90%] m-auto md:my-[170px] relative my-[200px]"
          >
            <div className="w-[400px] h-[300px] absolute bg-slate-600 top-[-150px] left-[50px] z-50 rounded-r-full rounded-b-full overflow-hidden">
              <img src={event} alt="cover" className="object-fill w-full h-full" />
            </div>
            <div className="h-[140px]" />
            <div className="p-6 mt-3 text-xl text-justify md:text-2xl">
              The UAE EVGP is open to the public, and provides a wonderful opportunity for children of all ages and
              adults to spend a Saturday afternoon cheering for the teams, learning about electric vehicles, and
              marveling at the ingenuity and hard work of the students. In the morning our international technical
              experts will conduct final car safety inspections and driver weigh-in, and the teams will have a chance to
              conduct their qualifying laps on the track. Teams will line up for the group photo at 12:30 PM followed by
              the official race consisting of four 30-minute heats.
            </div>
            <div className="w-[100%] h-[1px] bg-slate-300  m-auto" />
            <div className="p-2 ">
              <a href="/files/event-schedule-2024.pdf" target="_blank" className="mx-2 mb-2">
                <Button size="large" variant="contained" color="primary">
                  More info
                </Button>
              </a>
            </div>
          </Paper>
        </div>
      </div>
      <div className={classes.floatingTitle}>
        <Container fixed>
          <div className={classes.title}>
            <TitleIcon text="Details" icon="library_add" extended />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Details;
