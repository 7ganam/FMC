import React, { useState, useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import PlayIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import YouTube from "react-youtube";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { useText } from "~/theme/common";
import yt from "~/youtube";
import useStyles from "./banner-style";
import DotsParallax from "../Parallax/Dots";

import logo1 from "~/public/images/attachment 1.png";

function VideoBanner() {
  // Theme breakpoints
  const theme = useTheme();
  const text = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Youtube player
  const [play, setPlayed] = useState(false);
  const [playCtrl, setPlayedCtrl] = useState(true);
  const [player, setPlayer] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    if (isDesktop) {
      /* Attention
       ** HandleScroll function to optimize site with video background may give an error log
       ** Uncaught TypeError: Cannot read property 'src' of null
       ** It's because HMR in development mode, and react-youtube need to refresh.
       ** The error log will not happen in production mode or just reload browser (development mode)
       ** You can uncomment _onPlay() function, if you don't want see error browser log.
       ** But then every changes you make, the browser will auto reload.
       */
      // _onPlay();
    }
  }, []);

  const _onEnd = (event) => {
    event.target.playVideo();
  };

  const _onPlay = () => {
    const curTime = player[0].getCurrentTime();
    if (curTime > 0) {
      setPlayed(true);
      setPlayedCtrl(true);
    }
  };

  const _onReady = (event) => {
    player.push(event.target);
    setPlayer(player);
  };

  const _onTogglePause = () => {
    setPlayedCtrl(!playCtrl);
    if (playCtrl) {
      player[0].pauseVideo();
    } else {
      player[0].playVideo();
    }
  };

  const opts = {
    height: "720",
    width: "1080",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      origin: "http://localhost:3009",
    },
  };

  return (
    <div className={classes.heroContent}>
      <Hidden smUp>
        <figure className={classes.mobileCover + " bg-slate-400"}>
          {/* <img src={imgApi.medical[0]} alt="cover" /> */}
        </figure>
      </Hidden>
      <Container fixed={isDesktop} className={`${isMobile ? "bg-slate-400" : ""}`}>
        <Grid container spacing={6}>
          <Grid item md={6} xs={12}>
            <div className={classes.bannerText}>
              <div variant="h5" className="mt-[150px] mb-1 font-extrabold text-2xl">
                Global Education Energy Environment (Global EEE)
              </div>
              <div>
                <Typography variant="h4">UAE Electric Vehicle Grand Prix</Typography>
              </div>
              <Typography className={clsx(classes.subtitle, text.subtitle2)} variant="h5">
                Coming again on UAE on March 2, 2024
              </Typography>
              <div className="flex gap-5">
                <Paper style={{ width: "200px", padding: "10px" }} className="flex items-center ">
                  <img src={logo1} alt="logo" style={{ width: "100%" }} />
                </Paper>
              </div>
            </div>
          </Grid>
          {isTablet && (
            <Grid item md={6} className={classes.visualContent}>
              <div className={classes.decoBanner}>
                <div className={classes.menuBg} />
                <div className={classes.videoBg} />
              </div>
              <div className={classes.videoWrap}>
                <div className={classes.videoFigure}>
                  <div className={classes.innerFigure}>
                    <Hidden mdDown>
                      {play && (
                        <IconButton className={classes.btnPlay} onClick={_onTogglePause}>
                          {playCtrl ? <PauseIcon /> : <PlayIcon />}
                        </IconButton>
                      )}
                    </Hidden>
                    {/* {!play || isMobile ? <img src={imgApi.medical[0]} alt="cover" /> : null} */}
                    {yt.use && (
                      <div className={classes.video}>
                        <Hidden mdDown>
                          <YouTube
                            videoId="7AKcCCSRJ5s"
                            opts={opts}
                            onReady={_onReady}
                            onEnd={_onEnd}
                            onPlay={_onPlay}
                          />
                        </Hidden>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className={classes.parallaxBanner}>
                <DotsParallax />
              </div>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default VideoBanner;
