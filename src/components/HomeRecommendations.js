import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import UpperComponent from "./UpperComponent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import { layout as layoutStyles } from "../cssProvider";

const useStyles = makeStyles(layoutStyles);

function HomeRecommendations() {
  const classes = useStyles();
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/3bde211c488d8ca48157")
      .then((res) => res.json())
      .then((response) => {
        setPeople(response);
      });
  }, []);
  return (
    <>
      <div className={classes.upperBox}>
        <UpperComponent visible="home" />
        <div className={classes.midFlex}>
          <div className={classes.flexItem}>Tax Consultant</div>
          <div className={classes.flexItem}>Cardiologist</div>
          <div className={classes.flexItem}>Advocate</div>
          <div className={classes.flexItem}>Hair Salon</div>
          <div className={classes.flexItem}>Tax Consultant</div>
        </div>
      </div>
      <div className={classes.lowerHomeLayout}>
        {people.map((obj, index) => (
          <div key={index} className={classes.card}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Grid item>
                <Badge
                  overlap="circle"
                  classes={{ badge: classes.cBadge }}
                  color="primary"
                  badgeContent={"99%"}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <Avatar
                    src={obj.pic}
                    alt={obj.name}
                    className={classes.imageCard}
                  />
                </Badge>
              </Grid>
              <Grid item className={classes.cardLeft}>
                <Typography variant="h6" className={classes.headCard}>
                  {obj.name}
                </Typography>
                <div className={classes.leftBlock}>
                  <Typography className={classes.secondaryContent}>
                    {obj.title}
                  </Typography>
                  <Typography className={classes.secondaryContent}>
                    {obj.subcategory}
                  </Typography>
                  <Typography className={classes.secondaryContent}>
                    {obj.phone}
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <div>
              <div className={classes.tag}>{obj.category}</div>
            </div>
            <div className={classes.flexButton}>
              <button className={classes.button}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomeRecommendations;
