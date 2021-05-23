import React from "react";
import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Zoom from "@material-ui/core/Zoom";
import Input from "@material-ui/core/Input";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

function Searchbox() {
  const [isClick, setClick] = useState(false);
  const [inputText, setInputText] = useState("");

  function handleClick() {
    setClick(true);
  }

  function inExpanded() {
    setClick(false);
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "80%",
      paddingLeft: "7vmax",
    },
    bttn: {
      backgroundColor: "white",
      textAlign: "center",
    },
    bttnDiv: {
      paddingTop: "1vmax",
      marginLeft: "10vmax",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {isClick ? (
        <Zoom in={true}>
          <form>
            <Input
              autoFocus
              placeholder="Search"
              autoComplete="off"
              fullWidth={true}
              type="text"
              name="seachBox"
              value={inputText}
              onChange={handleChange}
            />
            <div className={classes.bttnDiv}>
              <Fab color="primary">
                <SearchIcon />
              </Fab>
              <Fab
                color="primary"
                onClick={inExpanded}
              >
                <CloseIcon />
              </Fab>
            </div>
          </form>
        </Zoom>
      ) : (
        <Fab
          color="primary"
          onClick={handleClick}
        >
          <SearchIcon />
        </Fab>
      )}
    </div>
  );
}

export default Searchbox;
