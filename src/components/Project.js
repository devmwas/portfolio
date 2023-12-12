import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

function Project({ project, reverse }) {
  // We want to alter the order of project image and project details
  let reverseClass = reverse ? "flex-row-reverse" : "";
  return (
    <div
      style={{ borderRadius: "2%", overflow: "hidden" }}
      className={`lg:flex ${reverseClass} my-2 w-full lg:w-4/5 mx-auto bg-white-600 lg:justify-center`}
    >
      <div
        style={{ maxWidth: "500px" }}
        className="w-full flex justify-center mx-auto opacity-70 hover:opacity-90 overflow-hidden"
      >
        <a href={`${project.liveLink}`} target="blank">
          <img
            src={`${project.screenshot}`}
            className="hover:scale-105"
            alt="Project Screenshot"
          />
        </a>
      </div>
      <div
        className="flex flex-col justify-center bg-slate-300 mx-auto lg:w-1/2"
        style={{ maxWidth: "500px" }}
      >
        <div
          className={`flex justify-center ${
            reverse ? "lg:justify-start" : "lg:justify-end"
          } m-2 mt-4 font-bold font-mono text:sm sm:text-lg`}
        >
          {project.title}
        </div>

        {/* We'll create two decriptions and only render them depending on the screen size */}
        {/* This will render only on small screens and larger */}
        <div
          className={`text-center ${
            reverse ? "lg:text-start" : "lg:-left-1/3 lg:text-end"
          } bg-slate-300 mx-auto px-2 font-mono text-xs md:text-sm hidden lg:block`}
          style={{ position: "relative", width: "133%", borderRadius: "2%" }}
        >
          {project.description}
        </div>
        {/* This will only render on mobile phones */}
        <div
          className="text-center md:text-end bg-slate-300 font-mono mx-auto px-2 text-xs lg:hidden"
          style={{ position: "relative", width: "100%", maxWidth: "400px" }}
        >
          {project.description}
        </div>
        {/* Tech stacks */}
        <div
          className={`flex justify-center text-orange-600 ${
            reverse ? "lg:justify-start" : "lg:justify-end"
          } space-x-2 m-2 font-mono text-xs`}
        >
          {project.techStack.map((language, index) => {
            return (
              <div key={index}>
                {language}
                {/* We separate the items using commas, except for the last item */}
                {index !== project.techStack.length - 1 ? "," : ""}{" "}
              </div>
            );
          })}
        </div>
        {/* Links to view more about project */}
        <div
          className={`flex relative justify-center ${
            reverse ? "lg:justify-start" : "lg:justify-end"
          }   space-x-2 mb-4 lg:mx-2`}
        >
          <div>
            <a href={`${project.liveLink}`} target="blank">
              <LaunchIcon fontSize="small" />
            </a>
          </div>
          <div>
            <a href={`${project.githubLink}`} target="blank">
              <GitHubIcon fontSize="small" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
