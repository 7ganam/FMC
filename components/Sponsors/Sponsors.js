import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ScrollAnimation from "react-scroll-animation-wrapper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SponsorCard from "../Cards/Sponsor";
import useTitle from "../Title/title-style";
import useStyles from "./sponsor-style";

import s1 from "~/public/images/sponsors/NYUAbuDhabiLogo.png";
import s5 from "~/public/images/sponsors/Global EEE logo.png";
import s8 from "~/public/images/sponsors/3elemLogo.png";
import s10 from "~/public/images/sponsors/projotecLogo.png";
import s11 from "~/public/images/sponsors/usm-uae-seal.png";

const partnersData = [
  { logo: s5, title: "Global EEE", website: "https://globaleee.org/", role: "Technical Organizer" },
  { logo: s8, title: "3elm", website: "https://3elmeducation.com/ ", role: "Education Partner" },
  { logo: s11, title: "US Mission", website: "https://ae.usembassy.gov/", role: "Abu Dhabi, UAE" },
  { logo: s10, title: "ProjoTech", website: "https://projotech.com/", role: "Technology Partner" },
  { logo: s1, title: "NYUAD", website: "https://nyuad.nyu.edu/en/", role: "Academic Partner" },
];

const sponsorsData = [
  { logo: "/images/sponsors/pepsico.png", website: "https://www.pepsico.com/" },
  { logo: "/images/sponsors/alforsan.jpg", website: "https://alforsan.com/" },
  {
    logo: "/images/sponsors/marriott.jpg",
    website: "https://www.marriott.com/en-us/hotels/auhal-marriott-hotel-al-forsan-abu-dhabi/overview/ ",
  },
];

function Sponsors() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const classes = useStyles();
  const title = useTitle();

  const renderCard = (item, index) => (
    <SponsorCard key={index.toString()} website={item.website} title={item.title} logo={item.logo} role={item.role} />
  );

  return (
    <div className={classes.root} id="partners">
      <div className={classes.deco} />
      <Container fixed={isDesktop}>
        <Grid container spacing={isDesktop ? 3 : 0} justifyContent="center">
          <Grid item md={2} sm={9} xs={12}>
            <ScrollAnimation animateOnce animateIn="fadeInLeftShort" offset={-100} delay={200} duration={0.3}>
              <div className={classes.sideFilter}>
                <Typography variant="h4" className={`${title.primary} whitespace-nowrap`}>
                  Partners
                </Typography>
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid item md={10} sm={3} xs={12}></Grid>
          <Grid item lg={12} md={12} xs={12}>
            <div className="container grid grid-cols-1 gap-5 mx-auto md:grid-cols-4 p-4">
              {partnersData.map((item, index) => (
                <ScrollAnimation
                  key={item.title}
                  animateOnce
                  animateIn="fadeInUpShort"
                  offset={-100}
                  delay={index * 200}
                  duration={0.4}
                >
                  <div>{renderCard(item, index)}</div>
                </ScrollAnimation>
              ))}
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={isDesktop ? 3 : 0} justifyContent="center">
          <Grid item md={2} sm={9} xs={12}>
            <ScrollAnimation animateOnce animateIn="fadeInLeftShort" offset={-100} delay={200} duration={0.3}>
              <div className={classes.sideFilter}>
                <Typography variant="h4" className={`${title.primary} whitespace-nowrap`}>
                  Sponsors
                </Typography>
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid item md={10} sm={3} xs={12}></Grid>
          <Grid item lg={12} md={12} xs={12}>
            <div className="container grid grid-cols-1 gap-5 mx-auto md:grid-cols-4  p-4">
              {sponsorsData.map((item, index) => (
                <ScrollAnimation
                  key={`item-${index}`}
                  animateOnce
                  animateIn="fadeInUpShort"
                  offset={-100}
                  delay={index * 200}
                  duration={0.4}
                >
                  <div>{renderCard(item, index)}</div>
                </ScrollAnimation>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Sponsors;
