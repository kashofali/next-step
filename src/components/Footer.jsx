import React from "react";
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import {makeStyles} from "@material-ui/styles"

export default function Footer() {

  const useStyles = makeStyles({
    root: {
      backgroundColor: "#3259b1",
      color: "#C1905C",
      padding: "3rem",
      textAlign: "center"

    },
    content: {
      fontWeight: "lighter",
      fontSize: "1.5rem",
    }
  })

  const classes = useStyles();

  return (
      <Container fluid maxWidth="xl" className={classes.root}> 
         <Typography className={classes.content} variant="h6"> © nextStep 2020</Typography>
      </Container>
     
  );
}


