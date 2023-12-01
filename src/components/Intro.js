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
            <div className="text-xs sm:text-sm text-sky-400 font-mono">
              Hello. It's your
            </div>
            <div className="text-2xl sm:text-4xl md:text-6xl font-extrabold font-mono mb-6">
              Frontend Web Developer
            </div>
            <div className="text-md sm:text-lg">
              I am a software engineer with a specialization in frontend web
              development. I build elegant and highly interactive user
              interfaces using state-of-the art libraries and frameworks. I
              prioritize responsivesness and accessibility in my designs.
            </div>
            <div className="text-md sm:text-lg text-sky-400 md:text-xl mt-4 font-bold font-mono">
              - Devmwas
            </div>
            <Button
              variant="outlined"
              color="info"
              sx={{ marginTop: 4 }}
              onClick={() => setIsMessageOpen(true)}
            >
              Let's Talk
            </Button>
          </div>
          {/* These lines will be on small devices and larger */}
          <div
            style={{
              position: "absolute",
              width: "50vw",
              height: "70vh",
              overflow: "hidden",
              borderRadius: "2%",
              right: "16.67vw",
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
              width: "70vw",
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
