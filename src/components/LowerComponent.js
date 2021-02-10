import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { lowerComponent as lowerComponentStyles } from "../cssProvider";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(lowerComponentStyles);

function LowerComponent() {
  const classes = useStyles();
  return (
    <div className={classes.lower}>
      <div className={classes.recommendations}>
        <Typography className={classes.heading} variant="h6">
          Finance
        </Typography>
        <Typography className={classes.paragraph} variant="p">
          Dentist, Prosthodontist, etc.
        </Typography>
        <hr className={classes.line} />
      </div>
      <div className={classes.recommendations}>
        <Typography className={classes.heading} variant="h6">
          Alternative Medicine Doctors
        </Typography>
        <Typography className={classes.paragraph} variant="p">
          Ayurveda, Homeopath, etc.
        </Typography>
        <hr className={classes.line} />
      </div>
      <div className={classes.recommendations}>
        <Typography className={classes.heading} variant="h6">
          Therapist &amp; Nutritionists
        </Typography>
        <Typography className={classes.paragraph} variant="p">
          Acupuncturist, Physiotherapist, etc.
        </Typography>
        <hr className={classes.line} />
      </div>
    </div>
  );
}

export default LowerComponent;
