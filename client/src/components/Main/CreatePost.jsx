import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  input: {
    display: 'none',
  },
}));

function CreatePost(props) {
  const classes = useStyles();

  function handleClick() {
    props.toggle();
  }

  return (
    <div className="modal">
      <div className="modal_content">
        <span className="close" onClick={handleClick}>
          &times;
        </span>
        <form className={classes.root} noValidate autoComplete="on">
          <h3>Create Post</h3>
          <TextareaAutosize aria-label="minimum height" rowsMin={5} placeholder="Message" />
          <br />
          <input id="submit-post" className={classes.input} type="submit" />
          <label htmlFor="submit-post">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              component="span"
              endIcon={<SendRoundedIcon />}
            >
              Post
            </Button>
          </label>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
