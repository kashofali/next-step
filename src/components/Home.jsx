import React from "react";
import Searchbox from "./Searchbox";
import Courseproviders from "./CourseProviders";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import useWindowSize from "./useWindowSize";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";

function Home() {
  const size = useWindowSize();

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#fff6f4",
    },
    topContainer: {
      backgroundImage: 'url("./images/home.png")',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "35rem",
      padding: "5rem 1rem 12rem",
      width: "100%",
      textAlign: "center",
    },
    heading: {
      color: "#C1905C",
      fontWeight: "lighter",
      fontSize: "7vmax",
    },
    search: {
      marginTop: "5vmax",
    },
    content: {
      textAlign: "left",
      paddingLeft: "2rem",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header/>
      <div className={classes.topContainer}>
        <Grid container>
          <Grid
            direction="column"
            item
            xs={12}
            sm={6}
            md={12}
            lg={6}
            className={classes.content}
            style={{ textAlign: size.width > 900 ? "left" : "center" }}
          >
            <Typography className={classes.heading}>nextStep</Typography>
            <Typography variant="h5">Let's find your way</Typography>
          </Grid>
          <Grid
            direction="column"
            item
            xs={12}
            sm={6}
            md={12}
            lg={6}
            className={classes.search}
            style={{ textAlign: size.width > 900 ? "left" : "center" }}
          >
            <Searchbox />
          </Grid>
        </Grid>
      </div>
      <div>
        <Courseproviders />
      </div>
      <About/>
      <Footer/>
    </div>
  );
}

export default Home;
