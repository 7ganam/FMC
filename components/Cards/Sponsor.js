import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./cards-style";

function Sponsor(props) {
  const classes = useStyles();
  const { logo, website, title, role } = props;
  return (
    <Paper className={classes.profile}>
      <div className={classes.personBlock}>
        <div className="w-full h-[200px] p-5">
          <img src={logo} alt={title} className="w-full h-full object-contain" />
        </div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.action}>
        <div className="flex flex-col justify-center items-center  w-full">
          <Typography style={{ fontWeight: "bold" }}>{title}</Typography>
          <Typography>{role}</Typography>
          <div className="mt-2">
            <Button variant="contained" color="secondary" className={classes.button} href={website}>
              website
            </Button>
          </div>
        </div>
      </div>
    </Paper>
  );
}

Sponsor.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  exp: PropTypes.number.isRequired,
};

export default Sponsor;
