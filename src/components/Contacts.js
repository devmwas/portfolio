import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

function Contacts() {
  return (
    <div className="space-x-2">
      <a href="https://www.linkedin.com/in/mwangi-kinuthia/" target="blank">
        <LinkedInIcon color="primary" fontSize="medium" />
      </a>
      <a href="https://twitter.com/devmwas" target="blank">
        <TwitterIcon color="primary" fontSize="medium" />
      </a>
      <a href="https://github.com/devmwas" target="blank">
        <GitHubIcon color="primary" fontSize="medium" />
      </a>
    </div>
  );
}

export default Contacts;
