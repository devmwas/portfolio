import React from "react";
import { projects } from "../data/projects";
import Project from "./Project";

function Projects() {
  let reverse = null;
  return (
    <div
      className="p-2 sm:p-0 flex flex-col text-black space-y-4 lg:w-4/5 mx-auto"
      style={{
        backgroundImage: "radial-gradient( black, blue, yellow)",
        position: "relative",
        // opacity: 0.3,
      }}
    >
      <div className="text-white">My Projects</div>
      {projects.map((project, index) => {
        index % 2 === 0 ? (reverse = false) : (reverse = true);
        return <Project project={project} key={index} reverse={reverse} />;
      })}
    </div>
  );
}

export default Projects;
