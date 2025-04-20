import React from "react";
import Lines from "./Lines";
import AboutHeadingAnimation from "./animations/AboutHeadingAnimation";
import AboutBigTextAnimation from "./animations/AboutBigTextAnimation";
import TechStack from "./TechStack";
import { MoveDown } from "@mui/icons-material";
import MoveUp from "./animations/MoveUp";

function About() {
  return (
    <div
      style={{
        height: "80vh",
        position: "relative",
        backgroundImage:
          "linear-gradient(to bottom right, black, darkBlue, black)",
      }}
      className="p-2"
      id="about"
    >
      {/* This is just a fancy background for aesthetics*/}
      <div
        style={{
          backgroundImage:
            "linear-gradient(to top right, darkBlue, black, darkBlue)",
        }}
        className="absolute left-[1vh] h-[70vh] overflow-hidden rounded-[2%] opacity-60 
        flex flex-wrap z-0 w-[48vw] lg:w-[46.667vw]"
      >
        <Lines angle={315} />
      </div>

      <div className="flex flex-col justify-center" style={{ height: "70vh" }}>
        <div className="flex justify-end">
          <div className="sm:w-5/6 z-30">
            <div
              // Tracking didnt support letter-spacing animations so I had to remove it
              // tracking-[-0.48px] sm:tracking-[-0.64px] lg:tracking-[-1px]
              className="text-right text-sky-400 font-semibold right-[10px] 
                text-[14px] leading-[21px] sm:text-[16px] sm:leading-[24px] 
                lg:text-[16px] lg:leading-[27px]"
              style={{
                top: "0px",
                wordSpacing: "6px",
              }}
            >
              About Me
            </div>

            <div
              className="text-right  text-[14px] leading-[21px] tracking-[1px]
                sm:text-[16px] sm:leading-[24px] sm:tracking-[2px]
                mt-[8px] lg:text-[16px] lg:leading-[27px] lg:tracking-[3px]"
              style={{
                // This used to be lg:6px md:4px 2px for lower devices. But then I had to make a
                // trade-off beween fanciness and functionality and code cleanliness
                wordSpacing: "3px",
              }}
            >
              Hello! I'm Mwangi Morris Kinuthia alias Devmwas, a Software
              Engineering graduate with a flair for web development. With a
              solid foundation in computer science, I specialize in building
              both sleek, user-centric frontend interfaces as well as powerful,
              efficient backend systems. I design intuitive user experiences and
              scalable backend architectures, all while being an excellent team
              player and collaborator.
            </div>

            {/* <MoveUp> */}
            <div className="text-right text-sky-400 mt-6 mb-2 font-semibold tracking-[2px] sm:tracking-[4px] lg:tracking-[6px]">
              Tech Stack
            </div>
            {/* </MoveUp> */}

            {/* TechStack Images */}
            <TechStack />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
