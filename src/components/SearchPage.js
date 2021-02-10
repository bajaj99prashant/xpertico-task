import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import UpperComponent from "./UpperComponent";
import LowerComponent from "./LowerComponent";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { layout as layoutStyles } from "../cssProvider";

const useStyles = makeStyles(layoutStyles);

function SearchPage() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.upperBox}>
        <UpperComponent visible="search" />
        <TextField
          className={classes.midObject}
          placeholder="Doctors, specialities, clinics"
          InputProps={{
            classes: { input: classes.input },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className={classes.icon} />
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
        />
      </div>
      <LowerComponent />
    </>
  );
}

export default SearchPage;
