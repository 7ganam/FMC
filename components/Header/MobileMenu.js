import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useTranslation } from "next-i18next";
import routeLink from "~/public/text/link";
import useStyles from "./header-style";
import navMenu from "./menu";

function MobileMenu(props) {
  const classes = useStyles();
  const { toggleDrawer, open } = props;
  const { t } = useTranslation("common");

  const SideList = () => (
    <div className={classes.mobileNav} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
      <div className={clsx(classes.menu, open && classes.menuOpen)}>
        <List component="nav">
          <ListItem button component="a" href="#about" key="about" style={{ animationDuration: 1 * 0.15 + "s" }}>
            <ListItemText primary="about" className={classes.menuList} />
          </ListItem>
          <ListItem button component="a" href="#EVGP" key="EVGP" style={{ animationDuration: 1 * 0.15 + "s" }}>
            <ListItemText primary="EVGP" className={classes.menuList} />
          </ListItem>
          <ListItem button component="a" href="#GEVC" key="GEVC" style={{ animationDuration: 1 * 0.15 + "s" }}>
            <ListItemText primary="GEVC" className={classes.menuList} />
          </ListItem>
          <ListItem
            button
            component="a"
            href="#officials"
            key="officials"
            style={{ animationDuration: 1 * 0.15 + "s" }}
          >
            <ListItemText primary="officials" className={classes.menuList} />
          </ListItem>
          <ListItem button component="a" href="#partners" key="partners" style={{ animationDuration: 1 * 0.15 + "s" }}>
            <ListItemText primary="partners" className={classes.menuList} />
          </ListItem>
          <ListItem
            button
            component="a"
            href="/contact.html"
            style={{ animationDuration: navMenu.length * 0.15 + "s" }}
          >
            <ListItemText primary="contact us" className={classes.menuList} />
          </ListItem>
        </List>
      </div>
    </div>
  );

  return (
    <SwipeableDrawer
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      classes={{
        paper: classes.paperNav,
      }}
    >
      <SideList />
    </SwipeableDrawer>
  );
}

MobileMenu.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MobileMenu;
