import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { makeStyles } from "@material-ui/core/styles";
import CoursePlatforms from "./CoursePlatforms";
import useWindowSize from "./useWindowSize";
import IconButton from "@material-ui/core/IconButton"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Link} from "react-router-dom"

function Courseproviders() {
  const coursePlatform = CoursePlatforms();

  const size = useWindowSize();

  const useStyles = makeStyles({
    root: {
      textAlign: "center",
      padding: "6rem"
    },
    gridList: {
      transform: "translateZ(0)",
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={120} spacing={4}>
        {coursePlatform.map((platform) => {
          return (
            <GridListTile
              cols={size.width > 900 ? 0.5 : 2}
              rows={size.width > 900 ? 2.5 : 2}
            >
              <img src={platform.image} alt="" />
              <GridListTileBar
                title={platform.name}
                titlePosition="bottom"
                className={classes.titleBar}
                actionIcon={
                  <Link to = {platform.name}>
                    <IconButton>
                      <MoreVertIcon/>
                    </IconButton>
                  </Link>
                }
              />
            </GridListTile>
          );
        })}
      </GridList>
      
    </div>
  );
}

export default Courseproviders;
