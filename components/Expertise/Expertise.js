import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import Hidden from "@material-ui/core/Hidden";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ScrollAnimation from "react-scroll-animation-wrapper";
import Carousel from "react-slick";
import { useSpring, animated } from "react-spring";
import { useTranslation } from "next-i18next";
import { useText } from "~/theme/common";
import useStyles from "./expertise-style";
import useTitle from "../Title/title-style";
import TitleDeco from "../Title/WithDecoration";
import { AiFillCheckSquare } from "react-icons/ai";

const expertiseList = [
  ["Practice", "Design", "Products"],
  ["Project", "Management", "team-work"],
  ["Presentation skills", "Engineering", "Math"],
  ["career build", "energy efficiency", "future"],
];

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;

function Expertise() {
  // Theme breakpoints
  const theme = useTheme();
  const text = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  // Translate Function
  const { t } = useTranslation("common");

  const classes = useStyles();
  const title = useTitle();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
  };
  const [position, setPosition] = useSpring(() => ({ xy: [0, 0], config: { mass: 50, tension: 550, friction: 140 } }));

  return (
    <div className={classes.root + " mt-[450px]"}>
      <Container onMouseMove={({ clientX: x, clientY: y }) => setPosition({ xy: calc(x, y) })}>
        <Grid container spacing={2}>
          {isDesktop && <Grid item lg={1} />}
          <Grid item md={5} xs={12}>
            <div className={classes.titleDeco}>
              {isDesktop && <div className={classes.decoration} />}
              <TitleDeco text={t("medical-landing.expertise_title")} />
              <ScrollAnimation animateOnce animateIn="zoomInShort" offset={-100} delay={100} duration={0.3}>
                <div className={classes.parallaxWrap}>
                  <animated.div style={{ transform: position.xy?.interpolate(trans1) }}>
                    <span className={classes.iconGreen} />
                  </animated.div>
                  <animated.div style={{ transform: position.xy?.interpolate(trans2) }}>
                    <span className={classes.iconRed} />
                  </animated.div>
                  <animated.div style={{ transform: position.xy?.interpolate(trans3) }}>
                    <span className={classes.iconBlue} />
                  </animated.div>
                </div>
              </ScrollAnimation>
            </div>
          </Grid>
          <Grid item lg={6} md={7} xs={12}>
            <Typography className={clsx(title.default, text.subtitle)} variant="h4">
              {t("medical-landing.expertise_subtitle")}
            </Typography>
            <Typography>{t("medical-landing.expertise_paragraph")}</Typography>
            <div className="flex gap-2 ml-3 mt-1">
              <AiFillCheckSquare className="w-6 h-6 text-blue-400" />
              <Typography className="ml-3">
                Putting to practice what they learn in the classroom by designing and building a working product
              </Typography>
            </div>
            <div className="flex gap-2 ml-3 mt-1">
              <AiFillCheckSquare className="w-6 h-6 text-blue-400" />
              <Typography className="ml-3">
                Developing soft skills and learning about project management and team work so they are better prepared
                for their careers
              </Typography>
            </div>
            <div className="flex gap-2 ml-3 mt-1">
              <AiFillCheckSquare className="w-6 h-6 text-blue-400" />
              <Typography className="ml-3">
                Understanding energy efficiency which they can translate to any project they work on in the future
              </Typography>
            </div>
            <div className="flex gap-2 ml-3 mt-1">
              <AiFillCheckSquare className="w-6 h-6 text-blue-400" />
              <Typography className="ml-3">
                Representing their countries at the highest level against the best students and minds on the planet
              </Typography>
            </div>

            <Hidden xsDown>
              <div className={classes.runningTag}>
                <Carousel {...settings}>
                  {expertiseList.map((group, indexGroup) => (
                    <div className={classes.tagGroup} key={indexGroup.toString()}>
                      {group.map((item, indexChild) => (
                        <span className={classes.tagItem} key={indexChild.toString()}>
                          {item}
                        </span>
                      ))}
                    </div>
                  ))}
                </Carousel>
              </div>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Expertise;
