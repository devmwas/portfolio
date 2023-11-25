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
    <div style={{ height: "100vh" }} className="p-2 sm:p:0">
      {/* These points will be on small devices and larger */}
      <div
        style={{
          position: "absolute",
          width: "50vw",
          height: "70vh",
          overflow: "hidden",
          zIndez: 100,
          left: "16.5vw",
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
          width: "70vw",
          height: "70vh",
          overflow: "hidden",
          zIndez: 100,
        }}
        className="flex flex-wrap sm:hidden"
      >
        <Lines angle={315} />
      </div>
      <div className="flex flex-col justify-center" style={{ height: "70vh" }}>
        <div className="flex justify-end">
          <div className="sm:w-3/4">
            <div className="text-right text-xs sm:text-sm text-sky-400 font-mono">
              About Me
            </div>
            <div className="text-right ">
              My name is Mwangi Morris Kinuthia alias Devmwas. I pursued Bsc
              Software Engineering in campus, where I learned core concepts of
              computer science. I got interested in web development at which
              point I started learning about it. I now possess a great skillset
              in building accessible and elegant user interfaces for various use
              cases.
            </div>
            <div className="text-right text-xs sm:text-sm text-sky-400 font-mono mt-4">
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
