import { Button } from "@mui/material";
import Lines from "./Lines";

function Intro({ setIsMessageOpen }) {
  return (
    <div
      className="p-2 flex flex-col"
      style={{
        height: "100vh",
        backgroundImage:
          "linear-gradient(to bottom right, darkBlue, black, darkBlue)",
      }}
      id="home"
    >
      <div className="my-auto">
        <div className="flex " style={{ height: "70vh" }}>
          <div className="my-auto z-30">
            <div
              className="text-xs sm:text-sm text-sky-400 font-mono ml-1.5"
              style={{ lineHeight: "10px" }}
            >
              Hello. It's your
            </div>
            <div
              style={{ lineHeight: "40px", letterSpacing: "-12px" }}
              className="text-2xl sm:text-4xl md:text-6xl font-extrabold font-mono"
            >
              Frontend Web Developer
              <div style={{ display: "inline-block", color: "orange" }}>.</div>
            </div>
            <div
              style={{
                lineHeight: "28px",
                letterSpacing: "2px",
                wordSpacing: "2px",
              }}
              className="text-md sm:text-lg ml-1.5 mt-8 bg-green-400"
            >
              I am a software engineer with a specialization in frontend web
              development. I build elegant and highly interactive user
              interfaces using state-of-the art libraries and frameworks. I
              prioritize responsivesness and accessibility in my designs.
            </div>
            <div
              style={{ lineHeight: "16px" }}
              className="text-md ml-1.5 bg-red-400 sm:text-lg text-sky-400 md:text-xl font-bold font-mono"
            >
              - Devmwas
            </div>
            <div className="ml-1.5 mt-8">
              <Button
                variant="contained"
                color="primary"
                onClick={() => setIsMessageOpen(true)}
              >
                Let's Talk
              </Button>
            </div>
          </div>
          {/* These lines will be on small devices and larger */}
          <div
            style={{
              position: "absolute",
              // Width is 70% of container width(2/3) for some reason
              width: "46.667vw",
              height: "70vh",
              overflow: "hidden",
              borderRadius: "2%",
              // right: "16.67vw",
              right: "18vw",
              opacity: 0.6,
              backgroundImage:
                "linear-gradient(to top right, black, darkBlue, black)",
            }}
            className="sm:flex flex-wrap hidden z-0"
          >
            <Lines />
          </div>
          {/* These lines will be visible on phones only */}
          <div
            style={{
              position: "absolute",
              right: 0,
              width: "48vw",
              margin: "2vw",
              height: "70vh",
              overflow: "hidden",
              borderRadius: "2%",
              opacity: 0.6,
              backgroundImage:
                "linear-gradient(to top right, black, darkBlue, black)",
            }}
            className="flex flex-wrap sm:hidden"
          >
            <Lines />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
