import { Button } from "@mui/material";
import Resume from "../../Files/Resume.pdf";
import { useState } from "react";

function Links() {
  // We'll need this to style the active link
  const [activeLink, setActiveLink] = useState("#home");

  return (
    <div className="my-auto">
      <div>
        {/* This text navbar will not show on mobile phones */}
        <div className="hidden lg:flex my-auto space-x-6 text-sky-400">
          <div
            className={`cursor-pointer ${
              activeLink === "#home" ? "text-orange-400 font-bold" : ""
            }`}
            style={{
              fontSize: "18px",
              lineHeight: "27px",
              letterSpacing: "3px",
            }}
          >
            <a href="#home" onClick={() => setActiveLink("#home")}>
              Home
            </a>
          </div>

          <div
            className={`cursor-pointer ${
              activeLink === "#about" ? "text-orange-400 font-bold" : ""
            }`}
            style={{
              fontSize: "18px",
              lineHeight: "27px",
              letterSpacing: "3px",
            }}
          >
            <a href="#about" onClick={() => setActiveLink("#about")}>
              About
            </a>
          </div>

          <div
            className={`cursor-pointer ${
              activeLink === "#projects" ? "text-orange-400 font-bold" : ""
            }`}
            style={{
              fontSize: "18px",
              lineHeight: "27px",
              letterSpacing: "3px",
            }}
          >
            <a href="#myprojects" onClick={() => setActiveLink("#projects")}>
              Projects
            </a>
          </div>

          <div
            className={`cursor-pointer ${
              activeLink === "#education" ? "text-orange-400 font-bold" : ""
            }`}
            style={{
              fontSize: "18px",
              lineHeight: "27px",
              letterSpacing: "3px",
            }}
          >
            <a href="#education" onClick={() => setActiveLink("#education")}>
              Education
            </a>
          </div>

          <div className="cursor-pointer -mt-0.5" style={{ fontSize: "18px" }}>
            <a href={Resume} target="blank">
              <Button
                variant="outlined"
                size="small"
                color="warning"
                onClick={() => setActiveLink("#resume")}
              >
                <div
                  className={`cursor-pointer ${
                    activeLink === "#resume" ? "text-orange-400 font-bold" : ""
                  }`}
                  style={{
                    fontSize: "14px",
                    letterSpacing: "3px",
                  }}
                >
                  Resume
                </div>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;
