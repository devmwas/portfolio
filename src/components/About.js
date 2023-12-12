import React from "react";
import TechStack from "./TechStack";
import Lines from "./Lines";

function About() {
  let points = [];
  for (let i = 0; i < 800; i++) {
    points.push(
      <div
        key={i}
        style={{ height: 5, width: 5, opacity: 0.2, borderRadius: 5 }}
        className="m-2 bg-sky-400"
      ></div>
    );
  }
  return (
    <div
      style={{
        height: "80vh",
        backgroundImage:
          "linear-gradient(to bottom right, black, darkBlue, black)",
      }}
      className="p-2 sm:p:0"
      id="about"
    >
      {/* These points will be on small devices and larger */}
      <div
        style={{
          position: "absolute",
          width: "46.667vw",
          height: "70vh",
          overflow: "hidden",
          borderRadius: "2%",
          // left: "16.67vw",
          left: "18vw",
          opacity: 0.6,
          backgroundImage:
            "linear-gradient(to top right, darkBlue, black, darkBlue)",
        }}
        className="sm:flex flex-wrap hidden"
      >
        <Lines angle={315} />
      </div>
      {/* These lines will be visible on phones only */}
      <div
        style={{
          position: "absolute",
          left: 0,
          width: "48vw",
          margin: "2vw",
          height: "70vh",
          overflow: "hidden",
          borderRadius: "2%",
          opacity: 0.6,
          backgroundImage:
            "linear-gradient(to top right, darkBlue, black, darkBlue)",
        }}
        className="flex flex-wrap sm:hidden"
      >
        <Lines angle={315} />
      </div>
      <div className="flex flex-col justify-center" style={{ height: "70vh" }}>
        <div className="flex justify-end">
          <div className="sm:w-3/4 z-30">
            {/* We will include the same elements multiple times and only show them at the intended breakpoints  */}
            {/* This will only show on large devices and above */}
            <div
              className="text-right text-sky-400 font-semibold hidden lg:block"
              style={{
                fontSize: "18px",
                lineHeight: "27px",
                letterSpacing: "3px",
                wordSpacing: "6px",
              }}
            >
              About Me
            </div>

            {/* This will only show on small and medium-sized devices */}
            <div
              className="text-right text-sky-400 mb-2 font-semibold hidden sm:block lg:hidden"
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "2px",
                wordSpacing: "4px",
              }}
            >
              About Me
            </div>

            {/* This will only show on mobile phones and smaller devices */}
            <div
              className="text-right text-sky-400 mb-2 font-semibold sm:hidden"
              style={{
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "1px",
                wordSpacing: "2px",
              }}
            >
              About Me
            </div>

            {/* This will only show on large devices and above */}
            <div
              className="text-right hidden lg:block"
              style={{
                fontSize: "18px",
                lineHeight: "27px",
                letterSpacing: "3px",
                wordSpacing: "6px",
              }}
            >
              My name is Mwangi Morris Kinuthia alias Devmwas. I pursued Bsc
              Software Engineering in campus, where I learned core concepts of
              computer science. I got interested in web development at which
              point I started learning about it. I now possess a great skillset
              in building accessible and elegant user interfaces for various use
              cases.
            </div>

            {/* This will only show on small and medium-sized devices */}
            <div
              className="text-right hidden sm:block lg:hidden"
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "2px",
                wordSpacing: "4px",
              }}
            >
              My name is Mwangi Morris Kinuthia alias Devmwas. I pursued Bsc
              Software Engineering in campus, where I learned core concepts of
              computer science. I got interested in web development at which
              point I started learning about it. I now possess a great skillset
              in building accessible and elegant user interfaces for various use
              cases.
            </div>

            {/* This will only show on mobile phones and smaller devices */}
            <div
              className="text-right sm:hidden"
              style={{
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "1px",
                wordSpacing: "2px",
              }}
            >
              My name is Mwangi Morris Kinuthia alias Devmwas. I pursued Bsc
              Software Engineering in campus, where I learned core concepts of
              computer science. I got interested in web development at which
              point I started learning about it. I now possess a great skillset
              in building accessible and elegant user interfaces for various use
              cases.
            </div>

            {/* This will only show on large devices and above */}
            <div
              className="text-right text-sky-400 mt-8 mb-2 font-semibold hidden lg:block"
              style={{
                fontSize: "18px",
                lineHeight: "27px",
                letterSpacing: "3px",
                wordSpacing: "6px",
              }}
            >
              Tech Stack
            </div>

            {/* This will only show on small and medium-sized devices */}
            <div
              className="text-right text-sky-400 mt-8 mb-2 font-semibold hidden sm:block lg:hidden"
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "2px",
                wordSpacing: "4px",
              }}
            >
              Tech Stack
            </div>

            {/* This will only show on mobile phones and smaller devices */}
            <div
              className="text-right text-sky-400 mt-8 mb-2 font-semibold sm:hidden"
              style={{
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "1px",
                wordSpacing: "2px",
              }}
            >
              Tech Stack
            </div>
            <TechStack />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
