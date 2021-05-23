import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";


export default function NoCourses() {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: " 10rem 2rem",
      // textAlign: "center",
    },
    bttn: {
      marginTop: "4rem"
    }
  }));

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h2">Sorry</Typography>
      <Typography variant="h5">No courses found Please try after some time</Typography>
        <Button className={classes.bttn} color="primary" variant="contained" href="/">Back to Home</Button>
    </Container>
  );
}
