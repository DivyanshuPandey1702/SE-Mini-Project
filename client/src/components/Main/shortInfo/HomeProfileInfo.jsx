import React from "react";
import Button from "@material-ui/core/Button";

function HomeProfileInfo() {
  return (
    <div>
      <p>Divyanshu Pandey</p>
      <Button href="/editprofile" variant="contained" color="primary">
        Edit Profile
      </Button>
    </div>
  );
}

export default HomeProfileInfo;
