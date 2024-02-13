import React from "react";
import { skillsData } from "../data/skills";

function Skills() {
  const SkillsComponents = skillsData.map((skill, index) => {
    // The Specific Skills for Current Stack/Niche
    const SkillItems = skill.map((skillItem, index) => {
      return <div>{skillItem}</div>;
    });

    // Specific Skill on a certain niche e.g frontend development with all it's details
    return (
      <div key={index}>
        {/* the name of the niche/field of study */}
        <div className="font-bold text-xl">{skill.name}</div>
        <div>
          {/* The Specific Skill Items on the Current Stack/Niche */}
          {SkillItems}
        </div>
      </div>
    );
  });

  // All Skills Components. Every Skill type is a component
  return <div>{SkillsComponents}</div>;
}
