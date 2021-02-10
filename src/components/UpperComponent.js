import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";
import { upperComponent as upperComponentStyles } from "../cssProvider";
import { navigate } from "@reach/router";

const useStyles = makeStyles(upperComponentStyles);

function UpperComponent({ visible }) {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={1}
      className={classes.gridUpperBox}
      alignItems="center"
    >
      <Grid item>
        {visible === "search" ? (
          <CloseIcon className={classes.icon} onClick={() => navigate("/")} />
        ) : (
          <ArrowBackIcon
            className={classes.icon}
            onClick={() => navigate("/search")}
          />
        )}
      </Grid>
      <Grid item>
        <Typography display="inline" className={classes.heading} variant="h6">
          {visible === "search" ? "Find & Book" : "Search"}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default UpperComponent;
