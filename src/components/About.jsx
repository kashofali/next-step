import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2rem 0 4rem 2rem",
    margin: "1rem",
    lineHeight: 1.5,
    width: "40%"
  },
}));

export default function About() {

    const classes= useStyles()

  return (
    <Box className={classes.root}>
      <Typography variant="h4">About</Typography>
      <Typography variant="h6">
        nextStep is a website for students who are willing to do courses and
        they do not know what course is best for them. This website will filter
        all of the courses available on different plaforms and displays the best
        courses for the students
      </Typography>
    </Box>
  );
}
