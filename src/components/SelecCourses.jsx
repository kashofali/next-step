import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles({
    root: {
        padding: "2rem 0 0 1rem",
        position: "relative"
    },
    formLabel:{
        fontSize: "1.4rem",
        padding: "3rem 0 0 1rem"
    },
    radioGroup: {
        padding: "1rem"
    },
  list: {
    width: 250,
  },
});

export default function SwipeableTemporaryDrawer(props) {


  const classes = useStyles();
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === "keydown") {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <FormControl component="fieldset">
        <FormLabel className={classes.formLabel} component="legend">Select Courses</FormLabel>
        <RadioGroup
        className={classes.radioGroup}
          aria-label="courses"
          name="SelectCourses"
          value={props.value}
          onChange={props.handleChange}
        >
          <FormControlLabel
            value="allCourses"
            control={<Radio />}
            label="All Courses"
            color="primary"
          />
          <FormControlLabel value="python" control={<Radio />} label="Python" />
          <FormControlLabel
            value="javascript"
            control={<Radio />}
            label="JavaScript"
          />
          <FormControlLabel
            value="webDevelopment"
            control={<Radio />}
            label="Web Development"
          />
          <FormControlLabel
            value="machineLearning"
            control={<Radio />}
            label="Machine Learning"
          />
          <FormControlLabel
            value="dataScience"
            control={<Radio />}
            label="Data Science"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );

  return (
    <div className={classes.root}>
      {["Select Courses"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
