import React from "react";
import Lines from "./Lines";
import AboutHeadingAnimation from "./animations/AboutHeadingAnimation";
import AboutBigTextAnimation from "./animations/AboutBigTextAnimation";
import TechStack from "./TechStack";

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
            {/* We will include the same elements multiple times and only show them at the intended breakpoints  */}
            {/* This will only show on large devices and above */}
            {/* We include Framer Motion animations to make it fancy */}
            <AboutHeadingAnimation>
              <div
                // Tracking didnt support letter-spacing animations so I had to remove it
                // tracking-[-0.48px] sm:tracking-[-0.64px] lg:tracking-[-1px]
                className="text-right text-sky-400 font-semibold right-[10px] hidden lg:block
                text-[14px] leading-[21px] sm:text-[16px] sm:leading-[24px] 
                lg:text-[16px] lg:leading-[27px]"
                style={{
                  top: "0px",
                  wordSpacing: "6px",
                }}
              >
                About Me
              </div>
            </AboutHeadingAnimation>

            {/* We include Framer Motion animations to make it fancy */}
            {/* We pass the offset which is literally the marginTop of our Title element */}
            <AboutBigTextAnimation offSet={"27px"} direction="left">
              <div
                className="text-right mt-[21px] text-[14px] leading-[21px] tracking-[1px]
                sm:mt-[24px] sm:text-[16px] sm:leading-[24px] sm:tracking-[2px]
                lg:mt-[27px] lg:text-[16px] lg:leading-[27px] lg:tracking-[3px]"
                style={{
                  // This used to be lg:6px md:4px 2px for lower devices. But then I had to make a
                  // trade-off beween fanciness and functionality and code cleanliness
                  wordSpacing: "3px",
                }}
              >
                Hello! I'm Mwangi Morris Kinuthia, also known as Devmwas, a
                Software Engineering graduate with a flair for web development.
                I bring a solid foundation in computer science, channeling it
                into crafting sleek, user-centric interfaces for various
                applications. Let's collaborate and bring innovation to the
                forefront of web development!
              </div>
            </AboutBigTextAnimation>

            {/* This will only show on large devices and above */}
            {/* We include Framer Motion animations to make it fancy */}
            <AboutHeadingAnimation
              fontSize="16px"
              lineHeight="27px"
              letterSpacing="3px"
              right={10}
            >
              <div
                className="text-right text-sky-400 mt-6 mb-2 font-semibold hidden lg:block"
                style={{
                  wordSpacing: "6px",
                }}
              >
                Tech Stack
              </div>
            </AboutHeadingAnimation>

            {/* This will only show on small and medium-sized devices */}
            {/* We include Framer Motion animations to make it fancy */}
            <AboutHeadingAnimation
              fontSize="16px"
              lineHeight="24px"
              letterSpacing="2px"
              right={10}
            >
              <div
                className="text-right text-sky-400 mt-6 mb-2 font-semibold hidden sm:block lg:hidden"
                style={{
                  wordSpacing: "4px",
                }}
              >
                Tech Stack
              </div>
            </AboutHeadingAnimation>

            {/* This will only show on mobile phones and smaller devices */}
            {/* We include Framer Motion animations to make it fancy */}
            <AboutHeadingAnimation
              fontSize="14px"
              lineHeight="21px"
              letterSpacing="1px"
              right={10}
            >
              <div
                className="text-right text-sky-400 mt-6 mb-2 font-semibold sm:hidden"
                style={{
                  wordSpacing: "2px",
                }}
              >
                Tech Stack
              </div>
            </AboutHeadingAnimation>

            {/* TechStack Images */}
            <TechStack />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
