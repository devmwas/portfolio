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
            {/* We'll include several divs containing the same items for responsiveness */}
            {/* This will only show on large devices and above */}
            <div
              style={{
                fontSize: "18px",
                lineHeight: "27px",
                letterSpacing: "3px",
              }}
              className="text-sky-400 hidden lg:block"
            >
              Hello. It's your
            </div>

            {/* This will show on small and medium-sized devices  */}
            <div
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "2px",
              }}
              className="text-sky-400 hidden sm:block lg:hidden"
            >
              Hello. It's your
            </div>

            {/* This will show on mobile phones and smaller devices  */}
            <div
              style={{
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "1px",
              }}
              className="text-sky-400 sm:hidden"
            >
              Hello. It's your
            </div>

            {/* This will show on large screens */}
            <div
              style={{
                lineHeight: "44px",
                fontSize: "40px",
                letterSpacing: "-1px",
              }}
              className="font-extrabold hidden lg:block"
            >
              Frontend Web Developer
              <div style={{ display: "inline-block", color: "orange" }}>.</div>
            </div>
            {/* This will show on small and medium-sized screens */}
            <div
              style={{
                lineHeight: "35.2px",
                fontSize: "32px",
                letterSpacing: ".64px",
              }}
              className="font-extrabold hidden sm:block lg:hidden"
            >
              Frontend Web Developer
              <div style={{ display: "inline-block", color: "orange" }}>.</div>
            </div>
            {/* This will show on mobile phones and smaller devices */}
            <div
              style={{
                lineHeight: "26.4px",
                fontSize: "24px",
                letterSpacing: "-.48px",
              }}
              className="font-extrabold sm:hidden"
            >
              Frontend Web Developer
              <div style={{ display: "inline-block", color: "orange" }}>.</div>
            </div>

            {/* This will on;y show on large screens and above */}
            <div
              style={{
                fontSize: "18px",
                lineHeight: "27px",
                letterSpacing: "3px",
                wordSpacing: "6px",
              }}
              className="mt-8 hidden lg:block"
            >
              I am a software engineer with a specialization in frontend web
              development. I build elegant and highly interactive user
              interfaces using state-of-the art libraries and frameworks. I
              prioritize responsivesness and accessibility in my designs.
            </div>

            {/* This will show on small and medium-sized devices  */}
            <div
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "2px",
                wordSpacing: "4px",
              }}
              className="mt-8 hidden sm:block lg:hidden"
            >
              I am a software engineer with a specialization in frontend web
              development. I build elegant and highly interactive user
              interfaces using state-of-the art libraries and frameworks. I
              prioritize responsivesness and accessibility in my designs.
            </div>

            {/* This will show on mobile phones and smaller devices  */}
            <div
              style={{
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "1px",
                wordSpacing: "2px",
              }}
              className="mt-8 sm:hidden"
            >
              I am a software engineer with a specialization in frontend web
              development. I build elegant and highly interactive user
              interfaces using state-of-the art libraries and frameworks. I
              prioritize responsivesness and accessibility in my designs.
            </div>

            {/* This will only show on large devices and above */}
            <div
              style={{
                fontSize: "18px",
                lineHeight: "27px",
                letterSpacing: "3px",
              }}
              className="text-sky-400 hidden lg:block mt-2"
            >
              - Devmwas
            </div>

            {/* This will show on small and medium-sized devices  */}
            <div
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "2px",
              }}
              className="text-sky-400 hidden sm:block lg:hidden"
            >
              - Devmwas
            </div>

            {/* This will show on mobile phones and smaller devices  */}
            <div
              style={{
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "1px",
              }}
              className="text-sky-400 sm:hidden"
            >
              - Devmwas
            </div>

            {/* This will only show on large devices and above */}
            <div className="mt-8 hidden lg:block">
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={() => setIsMessageOpen(true)}
              >
                <div className="font-bold">Let's Talk</div>
              </Button>
            </div>

            {/* This will show on small and medium-sized devices  */}
            <div className="mt-8 hidden sm:block lg:hidden">
              <Button
                variant="outlined"
                color="primary"
                size="medium"
                onClick={() => setIsMessageOpen(true)}
              >
                <div className="font-bold">Let's Talk</div>
              </Button>
            </div>

            {/* These lines will only show on mobile phones and smaller devices  */}
            <div className="mt-8 sm:hidden">
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => setIsMessageOpen(true)}
              >
                <div className="font-bold">Let's Talk</div>
              </Button>
            </div>
          </div>

          {/* These lines will only show on small devices and larger */}
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
