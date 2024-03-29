import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import { useTranslation } from "next-i18next";
import logo from "~/public/images/medical-logo.svg";
import brand from "~/public/text/brand";
import { useTextAlign } from "~/theme/common";
import useStyles from "./footer-style";
import SelectLang from "../LangSwitch/Select";

function Copyright() {
  return (
    <Typography variant="body2" display="block" color="textSecondary">
      &copy;&nbsp;
      {brand.medical.footerText}
    </Typography>
  );
}

const footers = [
  // {
  //   title: 'Company',
  //   description: ['Team', 'History', 'Contact us', 'Locations'],
  //   link: ['#team', '#history', '#contact-us', '#locations'],
  // },
  // {
  //   title: 'Resources',
  //   description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  //   link: ['#resource', '#resource-name', '#another-resource', '#final-resource'],
  // },
  // {
  //   title: 'Legal',
  //   description: ['Privacy policy', 'Terms of use'],
  //   link: ['#privacy-policy', '#terms-of-use'],
  // },
];

function Footer(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Translation Function
  const { t } = useTranslation("common");
  const { toggleDir } = props;

  const classes = useStyles();
  const align = useTextAlign();

  return (
    <Container maxWidth="lg" component="footer" className={classes.footer}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Box mr={-2} mt={-2}>
            <div className={classes.logo}>
              <img src={logo} alt="logo" />
              <Typography variant="subtitle1" color="textPrimary">
                UAE Electric Vehicle Grand Prix
              </Typography>
            </div>
            <div color="textPrimary" className={classes.footerDesc} gutterbottom="true">
              Held for the second time in UAE
              <div>Saturday 2 March, 2024</div>
            </div>
            {isDesktop && <Copyright />}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={isTablet ? 0 : 4} justifyContent="space-evenly">
            {footers.map((footer) => (
              <Grid item xs={12} md={3} key={footer.title} className={classes.siteMapItem}>
                {isDesktop && (
                  <div>
                    <Typography variant="h6" className={classes.title} color="textPrimary" gutterBottom>
                      {footer.title}
                    </Typography>
                    <ul>
                      {footer.description.map((item, index) => (
                        <li key={item}>
                          <Link href={footer.link[index]} variant="subtitle1" color="textSecondary">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {isMobile && (
                  <ExpansionPanel
                    square
                    classes={{
                      root: classes.accordionRoot,
                    }}
                  >
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon className={classes.accordionIcon} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      classes={{
                        content: classes.accordionContent,
                      }}
                    >
                      <strong>{footer.title}</strong>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <ul>
                        {footer.description.map((item, index) => (
                          <li key={item}>
                            <Link href={footer.link[index]} variant="subtitle1" color="textSecondary">
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.socmed}>
            <IconButton aria-label="IG" className={classes.margin} size="small">
              <a href="https://www.instagram.com/evgpglobal/" target="_blank">
                <i className="ion-logo-instagram" />
              </a>
            </IconButton>
            <IconButton aria-label="TW" className={classes.margin} size="small">
              <a href="https://twitter.com/EVGPGlobal" target="_blank">
                <i className="ion-logo-twitter" />
              </a>
            </IconButton>
            <IconButton aria-label="YT" className={classes.margin} size="small">
              <a href="https://www.youtube.com/@EVGPGlobal" target="_blank">
                <i className="ion-logo-youtube" />
              </a>
            </IconButton>
            <IconButton aria-label="LI" className={classes.margin} size="small">
              <a href="https://www.tiktok.com/@globalevgp?_t=8jsiHnPW6Lt&_r=1" target="_blank">
                <img src="/logo-tiktok.svg" height={24} width={24} />
              </a>
            </IconButton>
          </div>
          {/* <SelectLang toggleDir={toggleDir} /> */}
        </Grid>
      </Grid>
      {isMobile && (
        <div className={align.textCenter}>
          <Box p={4}>
            <Copyright />
          </Box>
        </div>
      )}
    </Container>
  );
}

Footer.propTypes = {
  toggleDir: PropTypes.func,
};

Footer.defaultProps = {
  toggleDir: () => {},
};

export default Footer;
