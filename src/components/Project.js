import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import ProjectTitleAnimation from "./animations/ProjectTitleAnimation";
import BigTextAnimation from "./animations/BigTextAnimation";

function Project({ project, reverse }) {
  // We want to alter the order of project image and project details
  let reverseClass = reverse ? "flex-row-reverse" : "";

  return (
    <div
      style={{ position: "relative" }}
      className={`lg:flex ${reverseClass} my-2 w-full lg:w-4/5 mx-auto lg:justify-center`}
    >
      <div
        style={{ maxWidth: "500px" }}
        className="w-full flex justify-center mx-auto opacity-70 hover:opacity-90 overflow-hidden"
      >
        {/* Project Image */}
        <a href={`${project.liveLink}`} target="blank">
          <img
            src={`${project.screenshot}`}
            className="hover:scale-105"
            alt="Project Screenshot"
          />
        </a>
      </div>

      {/* This will contain everything else about the project apart from the image */}
      <div
        className="flex flex-col relative justify-center bg-green-300 mx-auto lg:w-1/2"
        style={{ maxWidth: "500px", borderRadius: "2%" }}
      >
        {/* We will include the same elements multiple times and only show them at the intended breakpoints  */}
        {/* This will only show on large devices and above */}
        {/* We include Framer Motion animations to make it fancy */}
        {/* Project Title */}
        <div style={{ position: "relative" }}>
          <ProjectTitleAnimation
            letterSpacing="0px"
            fontSize="16px"
            lineHeight="27px"
          >
            <div
              className={`hidden lg:flex m-2 justify-center ${
                reverse ? "lg:justify-start" : "lg:justify-end"
              } font-bold font-mono`}
            >
              {project.title}
            </div>
          </ProjectTitleAnimation>

          {/* This will only show on small and medium-sized devices */}
          {/* We include Framer Motion animations to make it fancy */}
          {/* This will show on small devices and medium-sized devices */}
          <ProjectTitleAnimation
            letterSpacing="0px"
            fontSize="16px"
            lineHeight="24px"
          >
            <div
              className={`hidden sm:flex m-2 lg:hidden justify-center ${
                reverse ? "lg:justify-start" : "lg:justify-end"
              } font-bold font-mono`}
            >
              {project.title}
            </div>
          </ProjectTitleAnimation>

          {/* This will only show on mobile phones and smaller devices */}
          {/* We include Framer Motion animations to make it fancy */}
          {/* This will only show on mobile phones */}
          <ProjectTitleAnimation
            letterSpacing="0px"
            fontSize="14px"
            lineHeight="21px"
          >
            <div
              className={`flex sm:hidden m-2 justify-center ${
                reverse ? "lg:justify-start" : "lg:justify-end"
              } font-bold font-mono`}
            >
              {project.title}
            </div>
          </ProjectTitleAnimation>

          {/* We'll create two decriptions and only render them depending on the screen size */}
          {/* This will render only on larger screens and above */}
          {/* We include Framer Motion animations to make it fancy */}
          {/* We pass the offset which is literally the marginTop of our Title element */}
          <BigTextAnimation
            offSet={"35px"}
            direction={reverse ? "left" : "right"}
          >
            <div
              className={`text-center ${
                reverse ? "lg:text-start" : "lg:-left-1/3 lg:text-end"
              } mx-auto p-2 bg-green-400 font-mono text-xs md:text-sm hidden lg:block`}
              style={{
                position: "relative",
                borderRadius: "2%",
                marginTop: "35px",
              }}
            >
              {project.description}
            </div>
          </BigTextAnimation>

          {/* This will render on medium devices and lower */}
          {/* We include Framer Motion animations to make it fancy */}
          {/* We pass the offset which is literally the marginTop of our Title element */}
          <BigTextAnimation offSet={"32px"} direction={"right"}>
            <div
              className="text-center bg-slate-300 font-mono mx-auto px-2 text-xs lg:hidden"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "500px",
                marginTop: "32px",
              }}
            >
              {project.description}
            </div>
          </BigTextAnimation>

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
    </div>
  );
}

export default Project;
