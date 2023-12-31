import React from "react";
import TechStack from "./TechStack";
import Lines from "./Lines";
import AboutHeadingAnimation from "./animations/AboutHeadingAnimation";
import BigTextAnimation from "./animations/BigTextAnimation";

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
      {/* These points will be only visible on larger devices and higher */}
      <div
        style={{
          position: "absolute",
          width: "46.667vw",
          height: "70vh",
          overflow: "hidden",
          borderRadius: "2%",
          left: "1vw",
          opacity: 0.6,
          backgroundImage:
            "linear-gradient(to top right, darkBlue, black, darkBlue)",
        }}
        className="lg:flex flex-wrap hidden"
      >
        <Lines angle={315} />
      </div>

      {/* These lines will be visible on medium-sized devices and lower */}
      <div
        style={{
          position: "absolute",
          left: 0,
          width: "48vw",
          height: "70vh",
          overflow: "hidden",
          borderRadius: "2%",
          opacity: 0.6,
          backgroundImage:
            "linear-gradient(to top right, darkBlue, black, darkBlue)",
        }}
        className="flex flex-wrap lg:hidden"
      >
        <Lines angle={315} />
      </div>

      <div className="flex flex-col justify-center" style={{ height: "70vh" }}>
        <div className="flex justify-end">
          <div className="sm:w-5/6 z-30">
            {/* We will include the same elements multiple times and only show them at the intended breakpoints  */}
            {/* This will only show on large devices and above */}
            {/* We include Framer Motion animations to make it fancy */}
            <AboutHeadingAnimation
              fontSize="16px"
              lineHeight="27px"
              letterSpacing="3px"
              right={10}
            >
              <div
                className="text-right text-sky-400 font-semibold hidden lg:block"
                style={{
                  top: "0px",
                  wordSpacing: "6px",
                }}
              >
                About Me
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
                className="text-right text-sky-400 mb-2 font-semibold hidden sm:block lg:hidden"
                style={{
                  wordSpacing: "4px",
                }}
              >
                About Me
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
                className="text-right text-sky-400 mb-2 font-semibold sm:hidden"
                style={{
                  wordSpacing: "2px",
                }}
              >
                About Me
              </div>
            </AboutHeadingAnimation>

            {/* This will only show on large devices and above */}
            {/* We include Framer Motion animations to make it fancy */}
            {/* We pass the offset which is literally the marginTop of our Title element */}
            <BigTextAnimation offSet={"27px"} direction="left">
              <div
                className="text-right hidden lg:block"
                style={{
                  fontSize: "16px",
                  lineHeight: "27px",
                  letterSpacing: "3px",
                  wordSpacing: "6px",
                  marginTop: "27px",
                }}
              >
                Hello! I'm Mwangi Morris Kinuthia, also known as Devmwas, a
                Software Engineering graduate with a flair for web development.
                I bring a solid foundation in computer science, channeling it
                into crafting sleek, user-centric interfaces for various
                applications. Let's collaborate and bring innovation to the
                forefront of web development!
              </div>
            </BigTextAnimation>

            {/* This will only show on small and medium-sized devices */}
            {/* We include Framer Motion animations to make it fancy */}
            {/* We pass the offset which is literally the marginTop of our Title element */}
            <BigTextAnimation offSet={"24px"} direction="left">
              <div
                className="text-right hidden sm:block lg:hidden"
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "2px",
                  wordSpacing: "4px",
                  marginTop: "24px",
                }}
              >
                Hello! I'm Mwangi Morris Kinuthia, also known as Devmwas, a
                Software Engineering graduate with a flair for web development.
                I bring a solid foundation in computer science, channeling it
                into crafting sleek, user-centric interfaces for various
                applications. Let's collaborate and bring innovation to the
                forefront of web development!
              </div>
            </BigTextAnimation>

            {/* This will only show on mobile phones and smaller devices */}
            {/* We include Framer Motion animations to make it fancy */}
            {/* We pass the offset which is literally the marginTop of our Title element */}
            <BigTextAnimation offSet={"21px"} direction="left">
              <div
                className="text-right sm:hidden"
                style={{
                  fontSize: "14px",
                  lineHeight: "21px",
                  letterSpacing: "1px",
                  wordSpacing: "2px",
                  marginTop: "21px",
                }}
              >
                Hello! I'm Mwangi Morris Kinuthia, also known as Devmwas, a
                Software Engineering graduate with a flair for web development.
                I bring a solid foundation in computer science, channeling it
                into crafting sleek, user-centric interfaces for various
                applications. Let's collaborate and bring innovation to the
                forefront of web development!
              </div>
            </BigTextAnimation>

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
