import React from "react";
import { projects } from "../data/projects";
import Project from "./Project";
import HeadingAnimation from "./animations/HeadingAnimation";

function Projects() {
  // This will help us reverse the order of project information and project image
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
      <HeadingAnimation
        fontSize="18px"
        lineHeight="27px"
        letterSpacing="3px"
        wordSpacing="6px"
        left={"16px"}
      >
        <div className="text-sky-400 font-semibold hidden lg:block">
          My Projects
        </div>
      </HeadingAnimation>

      {/* This will only show on small and medium-sized devices */}
      <HeadingAnimation
        fontSize="16px"
        lineHeight="24px"
        letterSpacing="2px"
        wordSpacing="4px"
        left="8px"
      >
        <div className="text-sky-400 font-semibold hidden sm:block lg:hidden">
          My Projects
        </div>
      </HeadingAnimation>

      {/* This will only show on mobile phones and smaller devices */}
      <HeadingAnimation
        fontSize="14px"
        lineHeight="21px"
        letterSpacing="1px"
        wordSpacing="2px"
        left="8px"
      >
        <div className="text-sky-400 font-semibold sm:hidden">My Projects</div>
      </HeadingAnimation>

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
