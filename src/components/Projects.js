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
      <div className="text-sky-400 text-xl pl-24">My Projects</div>
      {projects.map((project, index) => {
        index % 2 === 0 ? (reverse = false) : (reverse = true);
        return <Project project={project} key={index} reverse={reverse} />;
      })}
    </div>
  );
}

export default Projects;
