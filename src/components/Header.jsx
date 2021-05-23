import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import BarChartIcon from "@material-ui/icons/BarChart";

function Header() {
  const useStyles = makeStyles((theme) => ({
    root: {},
    title: {},
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <ToolBar>
          <IconButton edge="start" color="inherit">
            <BarChartIcon />
          </IconButton>
          <Typography variant="h5">nextStep</Typography>
        </ToolBar>
      </AppBar>
    </div>
  );
}

export default Header;
