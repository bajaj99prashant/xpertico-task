import React from "react";
import { Router } from "@reach/router";
import { makeStyles } from "@material-ui/core/styles";
import { layout as layoutStyles } from "./cssProvider";
import SearchPage from "./components/SearchPage";
import HomeRecommendations from "./components/HomeRecommendations";

const useStyles = makeStyles(layoutStyles);

function App() {
  const classes = useStyles();

  return (
    <div className={classes.backgroundContainer}>
      <Router>
        <HomeRecommendations path="/" />
        <SearchPage path="/search" />
      </Router>
    </div>
  );
}

export default App;
