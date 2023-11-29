import { Button } from "@mui/material";
import Lines from "./Lines";

function Intro({ setIsMessageOpen }) {
  return (
    <div className="p-2 sm:p-0 flex flex-col" style={{ height: "100vh" }}>
      <div className="my-auto">
        <div className="flex " style={{ height: "70vh" }}>
          <div className="my-auto">
            <div className="text-xs sm:text-sm text-sky-400 font-mono z-10">
              Hello. It's your
            </div>
            <div className="text-2xl sm:text-4xl md:text-6xl font-extrabold font-mono mb-6 z-10">
              Frontend Web Developer
            </div>
            <div className="text-md sm:text-lg z-10">
              I am a software engineer with a specialization in frontend web
              development. I build elegant and highly interactive user
              interfaces, which are responsive and accessible, using
              state-of-the art libraries and frameworks.
            </div>
            <div className="text-md sm:text-lg text-sky-400 md:text-xl mt-4 font-bold font-mono z-10">
              - Devmwas
            </div>
            <Button
              variant="outlined"
              color="info"
              sx={{ marginTop: 4 }}
              onClick={() => setIsMessageOpen(true)}
            >
              Make Contact
            </Button>
          </div>
          {/* These points will be on small devices and larger */}
          <div
            style={{
              position: "absolute",
              width: "50vw",
              height: "70vh",
              overflow: "hidden",
              zIndez: 100,
              right: "16.5vw",
            }}
            className="sm:flex flex-wrap hidden"
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
              zIndez: 100,
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
