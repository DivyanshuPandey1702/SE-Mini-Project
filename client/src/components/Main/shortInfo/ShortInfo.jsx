import React, { useState } from "react";
import HomeProfileInfo from "./HomeProfileInfo.jsx";
import CreatePost from "../CreatePost.jsx";
import Footer from "../../Footer/Footer.jsx";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function ShortInfo() {
  const classes = useStyles();

  const [stateCreatePost, setStateCreatePost] = useState({
    seenCreatePost: false,
  });

  function togglePopCreatePost() {
    const value = stateCreatePost.seenCreatePost;
    setStateCreatePost(() => {
      return {
        seenCreatePost: !value,
      };
    });
  }

  return (
    <div className="fixedShortInfo">
      <div className={classes.root}>
        <HomeProfileInfo />
        <div onClick={togglePopCreatePost}>
          <Button variant="contained" color="primary">
            Create Post
          </Button>
        </div>
        {stateCreatePost.seenCreatePost ? (
          <CreatePost toggle={togglePopCreatePost} />
        ) : null}
        <Footer />
      </div>
    </div>
  );
}

export default ShortInfo;
