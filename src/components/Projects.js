import React from "react";
import { projects } from "../data/projects";
import Project from "./Project";

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

      <div style={{ marginTop: "8px" }}>
        <div className="text-sky-400 font-semibold w-full text-center lg:w-4/5 mx-auto mb-[8px]">
          My Projects
        </div>
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
