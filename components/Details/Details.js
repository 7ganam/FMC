import React from "react";
import Container from "@material-ui/core/Container";
import { useTranslation } from "next-i18next";
import { Paper } from "@material-ui/core";
import useStyles from "./details-style";
import TitleIcon from "../Title/WithIcon";
import DotsParallax from "../Parallax/Dots";

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
              <img src={event} alt="cover" className="w-full h-full object-fill" />
            </div>
            <div className="h-[140px]" />
            <div className="text-xl md:text-2xl p-6 mt-3">
              The FMC is open to the public, and provides a wonderful opportunity for children of all ages and adults to
              spend a Saturday afternoon cheering for the teams, learning about electric vehicles and marveling at the
              ingenuity and hard work of the students. In the morning our international technical experts will conduct
              car safety inspections and driver weigh-in, and the teams will have a chance to do their final testing and
              practice on the track. Teams will line up for the group photo at 1:15 PM followed by the official race
              consisting of several heats for both challenges.
            </div>
          </Paper>
        </div>
      </div>
      <div className={classes.floatingTitle}>
        <Container fixed>
          <div className={classes.title}>
            <TitleIcon text={t("medical-landing.details_title")} icon="library_add" extended />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Details;
