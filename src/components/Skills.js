import React from "react";
import { skillsData } from "../data/skills";
import { Chip } from "@mui/material";
import SkillsAndCompetenceHeadingAnimation from "./animations/SkillsAndCompetenceHeadingAnimation";

function Skills() {
  const SkillsComponents = skillsData.map((skill, index) => {
    // The Specific Skills for Current Stack/Niche
    const SkillItems = skill.skills.map((skillItem, index) => {
      return (
        <Chip
          label={skillItem}
          color="primary"
          variant="outlined"
          sx={{ padding: "0px" }}
        >
          {skillItem}
        </Chip>
      );
    });

    // Specific Skill on a certain niche e.g frontend development with all it's details
    return (
      <div key={index} className="">
        {/* the name of the niche/field of study */}
        <div className="mb-2  italic">{skill.name}</div>
        <div className="flex space-x-2 overflow-x-scroll">
          {/* The Specific Skill Items on the Current Stack/Niche */}
          {SkillItems}
        </div>
      </div>
    );
  });

  // All Skills Components. Every Skill type is a component
  return (
    <div
      className="bg-red-900 p-2 relative py-8"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, darkBlue, black, darkBlue)",
      }}
    >
      {/* This will only show on large devices and above  */}
      {/* We include Framer Motion animations to make it fancy */}
      <SkillsAndCompetenceHeadingAnimation
        fontSize="16px"
        lineHeight="27px"
        letterSpacing="3px"
        right={10}
      >
        <div
          // Tracking didnt support letter-spacing animations so I had to remove it
          // tracking-[-0.48px] sm:tracking-[-0.64px] lg:tracking-[-1px]
          className="mb-4 text-sky-400 font-semibold 
                text-[14px] leading-[21px] sm:text-[16px] sm:leading-[24px] 
                lg:text-[16px] lg:leading-[27px]"
          style={{
            top: "0px",
            wordSpacing: "6px",
          }}
        >
          Skills & Competence
        </div>
      </SkillsAndCompetenceHeadingAnimation>
      <div className="mx-4 md:mx-8 mt-10">{SkillsComponents}</div>
    </div>
  );
}

export default Skills;
