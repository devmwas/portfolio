import React from "react";
import { projects } from "../data/projects";
import Project from "./Project";

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
      <div
        className="text-sky-400 pl-24 font-semibold hidden lg:block"
        style={{
          fontSize: "18px",
          lineHeight: "27px",
          letterSpacing: "3px",
          wordSpacing: "6px",
        }}
      >
        My Projects
      </div>

      {/* This will only show on small and medium-sized devices */}
      <div
        className="text-sky-400 font-semibold hidden sm:block lg:hidden"
        style={{
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "2px",
          wordSpacing: "4px",
        }}
      >
        My Projects
      </div>

      {/* This will only show on mobile phones and smaller devices */}
      <div
        className="text-sky-400 font-semibold sm:hidden"
        style={{
          fontSize: "14px",
          lineHeight: "21px",
          letterSpacing: "1px",
          wordSpacing: "2px",
        }}
      >
        My Projects
      </div>

      {projects.map((project, index) => {
        index % 2 === 0 ? (reverse = false) : (reverse = true);
        return <Project project={project} key={index} reverse={reverse} />;
      })}
    </div>
  );
}

export default Projects;
