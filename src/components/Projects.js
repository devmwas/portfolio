import React from "react";
import { projects } from "../data/projects";
import Project from "./Project";
import ProjectsHeadingAnimation from "./animations/ProjectsHeadingAnimation";

function Projects() {
  let reverse = null;
  return (
    <div
      id="projects"
      className="p-2 sm:p-0 flex flex-col text-black space-y-2 lg:w-full mx-auto mt-16"
      style={{
        backgroundImage: "linear-gradient(black, darkBlue, black)",
        position: "relative",
      }}
    >
      {/* This is just for when the user clicks on the Projects page */}
      <div
        className="-mt-16 bg-green-400 opacity-0"
        style={{ position: "absolute" }}
        id="myprojects"
      >
        Projects
      </div>

      {/* We will include the same element multiple times and only show them at the intended breakpoints  */}
      {/* This will only show on large devices and above */}
      <ProjectsHeadingAnimation
        fontSize="18px"
        lineHeight="27px"
        letterSpacing="3px"
        wordSpacing="6px"
        left={10}
      >
        <div className="text-sky-400 pl-24 font-semibold hidden lg:block">
          My Projects
        </div>
      </ProjectsHeadingAnimation>

      {/* This will only show on small and medium-sized devices */}
      <ProjectsHeadingAnimation
        fontSize="16px"
        lineHeight="24px"
        letterSpacing="2px"
        wordSpacing="4px"
        left={10}
      >
        <div className="text-sky-400 font-semibold hidden sm:block lg:hidden">
          My Projects
        </div>
      </ProjectsHeadingAnimation>

      {/* This will only show on mobile phones and smaller devices */}
      <ProjectsHeadingAnimation
        fontSize="14px"
        lineHeight="21px"
        letterSpacing="1px"
        wordSpacing="2px"
        left={10}
      >
        <div className="text-sky-400 font-semibold sm:hidden">My Projects</div>
      </ProjectsHeadingAnimation>

      <div style={{ marginTop: "54px" }}>
        {projects.map((project, index) => {
          // Reverse will be false for all items whose index is divisible by 2
          index % 2 === 0 ? (reverse = false) : (reverse = true);
          return <Project project={project} key={index} reverse={reverse} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
