import React, { useState } from "react";
import Header from "../components/Header";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import PythonList from "../courses/python.json";
import JavascriptList from "../courses/javascript.json";
import WebDevelopment from "../courses/webDevelopment.json";
import AllCourses from "../courses/allcourses.json";
import MachineLearning from "../courses/machineLearning.json"
import DataScience from "../courses/dataScience.json"

import SelectCourses from "../components/SelecCourses";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#fff6f4",
  },
  total:{
    padding: "2rem 0 0 1rem",
    position: "relative"
  },
  root: {
    backgroundColor: "#faf1e6",
    maxWidth: 345,
    height: 550,
    margin: "1rem",
  },
  media: {
    height: 240,
  },
}));

export default function UdemyCourses() {
  const courseNames = {
    allCourses: AllCourses,
    python: PythonList,
    javascript: JavascriptList,
    webDevelopment: WebDevelopment,
    machineLearning: MachineLearning,
    dataScience: DataScience
  };

  const [value, setValue] = React.useState("allCourses");

  const [courses, setCourses] = useState(courseNames.allCourses);

  const handleChange = (event) => {
    const value = event.target.value;
    setValue(value);
    setCourses(courseNames[value]);
    console.log(courses.results);
  };

  const courseLists = courses.results;

  const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  const shuffleList = shuffle(courseLists)

  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Header />
      <Typography className={classes.total} variant="body1">Total courses: {courses.results.length}</Typography>
      <SelectCourses handleChange={handleChange} value={value}/>
      <Container>
        <Grid container>
          {courseLists.map((courses) => {
            const url = "https://udemy.com" + courses.url;
            return (
              <Grid item xs={12} sm={4}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={courses.image_240x135}
                      title={courses.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {courses.title}
                      </Typography>
                      <Typography variant="h6">{courses.price}</Typography>
                      <Typography>
                        {courses.visible_instructors.map(
                          (instructors) => instructors.name + " "
                        )}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {courses.headline}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      className={classes.bttn}
                      color="primary"
                      href={url}
                      target="_blank"
                    >
                      View more
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
