import { Button } from "@mui/material";
import Resume from "../../Files/Resume.pdf";

function Links() {
  return (
    <div className="my-auto">
      <div>
        {/* This text navbar will not show on mobile phones */}
        <div className="hidden sm:flex my-auto space-x-2 text-sky-400">
          <div className="cursor-pointer">
            <a href="#home">Home</a>
          </div>
          <div className="cursor-pointer">
            <a href="#about">About</a>
          </div>
          <div className="cursor-pointer">
            <a href="#projects">Projects</a>
          </div>
          <div className="cursor-pointer">
            <a href="#education">Education</a>
          </div>
          <div className="cursor-pointer -mt-0.5" style={{}}>
            <a href={Resume} target="blank">
              <Button variant="outlined" size="small">
                Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;
