import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Container from "@material-ui/core/Container";
import SendIcon from "@material-ui/icons/Send";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useTranslation } from "next-i18next";
import routeLink from "~/public/text/link";
import { useText } from "~/theme/common";
import logo from "~/public/images/medical-logo.svg";
import Checkbox from "./Checkbox";
import useStyles from "./form-style";

import axios from "axios";

function Contact() {
  const { t } = useTranslation("common");
  const classes = useStyles();
  const text = useText();
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    ValidatorForm.addValidationRule("isTruthy", (value) => value);
  });

  const [openNotif, setNotif] = useState(false);

  const [check, setCheck] = useState(false);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = (event) => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/xoqzvpon",
      data: values,
    })
      .then((response) => {
        setNotif(true);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const handleClose = () => {
    setNotif(false);
  };

  return (
    <div className={classes.formWrap}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        key="top right"
        open={openNotif}
        autoHideDuration={4000}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">Message Sent</span>}
      />
      <Hidden mdUp>
        <div className={clsx(classes.logo, classes.logoHeader)}>
          <a href={routeLink.medical.home}>
            <img src={logo} alt="logo" />
          </a>
        </div>
      </Hidden>
      <Hidden smDown>
        <IconButton href={routeLink.medical.home} className={classes.backtohome}>
          <i className="ion-ios-home-outline" />
          <i className="ion-ios-arrow-round-back" />
        </IconButton>
      </Hidden>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom className={text.title}>
          Contact us
        </Typography>
        <Typography className={clsx(classes.desc, text.subtitle2)}>Send us a message</Typography>
        <div className={classes.form}>
          <ValidatorForm onSubmit={handleSubmit} onError={(errors) => console.log(errors)}>
            <Grid container spacing={6}>
              <Grid item sm={6} xs={12}>
                <TextValidator
                  className={classes.input}
                  label={"name"}
                  onChange={handleChange("name")}
                  name="Name"
                  value={values.name}
                  validators={["required"]}
                  errorMessages={["This field is required"]}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextValidator
                  className={classes.input}
                  label={"email"}
                  onChange={handleChange("email")}
                  name="Email"
                  value={values.email}
                  validators={["required", "isEmail"]}
                  errorMessages={["This field is required", "email is not valid"]}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextValidator
                  className={classes.input}
                  label={"phone"}
                  onChange={handleChange("phone")}
                  name="Phone"
                  value={values.phone}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextValidator
                  className={classes.input}
                  label={"company"}
                  onChange={handleChange("company")}
                  name="Company"
                  value={values.company}
                />
              </Grid>
              <Grid item xs={12}>
                <TextValidator
                  multiline
                  rows="6"
                  className={classes.input}
                  label={"message"}
                  onChange={handleChange("message")}
                  name="Message"
                  value={values.message}
                />
              </Grid>
            </Grid>
            <div className={classes.btnArea}>
              <FormControlLabel
                control={
                  <Checkbox
                    validators={["isTruthy"]}
                    errorMessages="This field is required"
                    checked={check}
                    value={check}
                    onChange={(e) => handleCheck(e)}
                    color="primary"
                  />
                }
                label={<span>I'm not a robot</span>}
              />
              <Button variant="contained" type="submit" color="primary" size="large">
                Send
                <SendIcon className={classes.rightIcon} />
              </Button>
            </div>
          </ValidatorForm>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
