import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Link from "next/link";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Scrollspy from "react-scrollspy";
import Settings from "./Settings";
import MobileMenu from "./MobileMenu";
import logo from "~/public/images/medical-logo.svg";

import routeLink from "~/public/text/link";
import useStyles from "./header-style";
import navMenu from "./menu";

function Header(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [fixed, setFixed] = useState(false);
  let flagFixed = false;
  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = scroll > 80;
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const classes = useStyles();
  const { onToggleDark, onToggleDir, invert } = props;

  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <Fragment>
      {isMobile && <MobileMenu open={openDrawer} toggleDrawer={handleOpenDrawer} />}
      <AppBar
        component="div"
        position="relative"
        id="header"
        className={clsx(classes.header, fixed && classes.fixed, openDrawer && classes.openDrawer)}
      >
        <Container fixed={isDesktop}>
          <div className={classes.headerContent}>
            <nav className={clsx(classes.navLogo, invert && classes.invert)}>
              {isMobile && (
                <IconButton
                  onClick={handleOpenDrawer}
                  className={clsx("hamburger hamburger--spin", classes.mobileMenu, openDrawer && "is-active")}
                >
                  <span className="hamburger-box">
                    <span className={clsx(classes.bar, "hamburger-inner")} />
                  </span>
                </IconButton>
              )}
              <div className={classes.logo}>
                {invert ? (
                  <Link href={routeLink.medical.home}>
                    <a>
                      <img src={logo} alt="logo" />
                      UAE Electric Vehicle Grand Prix
                    </a>
                  </Link>
                ) : (
                  <AnchorLink href="#home">
                    <img src={logo} alt="logo" />
                    UAE Electric Vehicle Grand Prix
                  </AnchorLink>
                )}
              </div>
            </nav>
            <nav className={clsx(classes.navMenu, invert && classes.invert)}>
              {isDesktop && (
                <Scrollspy items={navMenu} currentClassName="active">
                  <li key="about">
                    {invert ? (
                      // eslint-disable-next-line
                      <Button href={"/" + "#about"}>About</Button>
                    ) : (
                      // eslint-disable-next-line
                      <Button component={AnchorLink} offset={150} href="#about">
                        About
                      </Button>
                    )}
                  </li>
                  <li key="EVGP">
                    {invert ? (
                      // eslint-disable-next-line
                      <Button href={"/" + "#EVGP"}>About</Button>
                    ) : (
                      // eslint-disable-next-line
                      <Button component={AnchorLink} offset={150} href="#EVGP">
                        The Cars
                      </Button>
                    )}
                  </li>
                  <li key="GEVC">
                    {invert ? (
                      // eslint-disable-next-line
                      <Button href={"/" + "#GEVC"}>About</Button>
                    ) : (
                      // eslint-disable-next-line
                      <Button component={AnchorLink} offset={100} href="#GEVC">
                        Teams
                      </Button>
                    )}
                  </li>
                  <li key="Officials">
                    {invert ? (
                      // eslint-disable-next-line
                      <Button href={"/" + "#officials"}>About</Button>
                    ) : (
                      // eslint-disable-next-line
                      <Button component={AnchorLink} offset={100} href="#officials">
                        Officials
                      </Button>
                    )}
                  </li>
                  <li key="Partners">
                    {invert ? (
                      // eslint-disable-next-line
                      <Button href={"/" + "#partners"}>About</Button>
                    ) : (
                      // eslint-disable-next-line
                      <Button component={AnchorLink} offset={100} href="#partners">
                        Partners
                      </Button>
                    )}
                  </li>
                  <li>
                    <Button href="/contact.html">Contact Us</Button>
                  </li>
                </Scrollspy>
              )}
              <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} invert={invert} />
            </nav>
          </div>
        </Container>
      </AppBar>
    </Fragment>
  );
}

Header.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  invert: PropTypes.bool,
};

Header.defaultProps = {
  invert: false,
};

export default Header;
