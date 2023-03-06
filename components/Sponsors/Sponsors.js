import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ScrollAnimation from "react-scroll-animation-wrapper";
import clsx from "clsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useTranslation } from "next-i18next";
import imgAPI from "~/public/images/imgAPI";
import SponsorCard from "../Cards/Sponsor";
import useTitle from "../Title/title-style";
import useStyles from "./sponsor-style";

import s1 from "~/public/images/sponsors/ADU logo.png";
import s2 from "~/public/images/sponsors/Altair logo.png";
import s3 from "~/public/images/sponsors/ASME logo.png";
import s4 from "~/public/images/sponsors/EVIS logo.jpg";
import s5 from "~/public/images/sponsors/Global EEE logo.png";
import s6 from "~/public/images/sponsors/IEEE logo.png";
import s7 from "~/public/images/sponsors/Mathworks logo.png";
import s8 from "~/public/images/sponsors/3elemLogo.png";
import s9 from "~/public/images/sponsors/Al Nabooda logo.png";
import s10 from "~/public/images/sponsors/projotecLogo.png";
import s11 from "~/public/images/sponsors/usm-uae-seal.png";
const categories = ["all", "Orthopedic", "Nutritionist", "Pediatric", "Anaesthestic"];

const doctorsData = [
  {
    avatar: imgAPI.medical[7],
    name: "Jena Doe",
    title: "Pediatric Surgeon",
    rating: 95,
    exp: 4,
  },
  {
    avatar: imgAPI.medical[12],
    name: "John Doe",
    title: "Pediatric Surgeon",
    rating: 95,
    exp: 4,
  },
  {
    avatar: imgAPI.medical[8],
    name: "Jihan Doe",
    title: "Pediatric Surgeon",
    rating: 95,
    exp: 4,
  },
  {
    avatar: imgAPI.medical[10],
    name: "James Doe",
    title: "Pediatric Surgeon",
    rating: 95,
    exp: 4,
  },
  {
    avatar: imgAPI.medical[11],
    name: "Jim Doe",
    title: "Pediatric Surgeon",
    rating: 95,
    exp: 4,
  },
  {
    avatar: imgAPI.medical[9],
    name: "Jessy Doe",
    title: "Pediatric Surgeon",
    rating: 95,
    exp: 4,
  },
];

const sponsorsData = [
  { logo: s5, title: "Global EEE", website: "https://globaleee.org/", role: "Technical Organizer" },
  { logo: s1, title: "ADU", website: "https://www.adu.ac.ae", role: "Academic Partner" },
  { logo: s8, title: "3elm", website: "https://3elmeducation.com/ ", role: "Education Partner" },
  { logo: s11, title: "US Embassy", website: "https://ae.usembassy.gov/", role: "AbuDhabi,UAE" },
  { logo: s10, title: "ProjoTech", website: "https://projotech.com/", role: "EdTech Partner" },
  { logo: s9, title: "Al Nabooda", website: "https://nabooda-auto.com/", role: "Automotive Partner" },
  { logo: s4, title: "EVIS", website: "https://www.evinnovationsummit.com/ ", role: "Awareness Partner" },
  { logo: s7, title: "Mathworks", website: "https://www.mathworks.com/", role: "Software Partner" },
  { logo: s3, title: "ASME", website: "https://www.asme.org/", role: "Professional Association" },
  { logo: s6, title: "IEEE", website: "https://www.ieee.org/", role: "Professional Association" },
];

function Sponsors() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // Translation Function
  const { t } = useTranslation("common");

  const classes = useStyles();
  const title = useTitle();
  const [selectedIndex, setSelectedIndex] = useState("all");

  function handleListItemClick(event, index) {
    setSelectedIndex(index);
  }

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
                <Typography variant="h4" className={title.primary}>
                  Partners
                </Typography>
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid item md={10} sm={3} xs={12}></Grid>
          <Grid item lg={12} md={12} xs={12}>
            <div className={classes.massonry}>
              <Grid container spacing={isDesktop ? 6 : 4}>
                {sponsorsData.map((item, index) => (
                  <Grid item sm={3} xs={12} key={index.toString()}>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInUpShort"
                      offset={-100}
                      delay={index * 200}
                      duration={0.4}
                    >
                      <div>{renderCard(item, index)}</div>
                    </ScrollAnimation>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Sponsors;
