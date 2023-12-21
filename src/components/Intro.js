import { Button, Hidden } from "@mui/material";
import Lines from "./Lines";
import IntroHeadingAnimation from "./animations/IntroHeadingAnimation";
import IntroButtonAnimation from "./animations/IntroButtonAnimation";
import BigTextAnimation from "./animations/BigTextAnimation";

function Intro({ setIsMessageOpen }) {
  return (
    <div
      className="p-2 flex flex-col"
      style={{
        height: "100vh",
        maxWidth: "100%",
        backgroundImage:
          "linear-gradient(to bottom right, darkBlue, black, darkBlue)",
      }}
      id="home"
    >
      <div className="my-auto">
        <div className="flex relative" style={{ height: "70vh" }}>
          <div className="my-auto sm:w-5/6 z-30">
            {/* We'll include several divs containing the same items for responsiveness */}
            {/* This will only show on large devices and above */}
            <div
              style={{
                fontSize: "16px",
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
            {/* We include Framer Motion animations to make it fancy */}
            <IntroHeadingAnimation
              fontSize="40px"
              letterSpacing="-1px"
              lineHeight="44px"
              left={0}
              startingLeft={"-16.5%"}
            >
              <div className="font-extrabold hidden lg:block">
                Frontend Web Developer
                <div style={{ display: "inline-block", color: "orange" }}>
                  .
                </div>
              </div>
            </IntroHeadingAnimation>

            {/* This will show on small and medium-sized screens */}
            {/* We include Framer Motion animations to make it fancy */}
            <IntroHeadingAnimation
              fontSize="32px"
              letterSpacing=".64px"
              lineHeight="35.2px"
              left={0}
              startingLeft={"-16.5%"}
            >
              <div className="font-extrabold hidden sm:block lg:hidden">
                Frontend Web Developer
                <div style={{ display: "inline-block", color: "orange" }}>
                  .
                </div>
              </div>
            </IntroHeadingAnimation>

            {/* This will show on mobile phones and smaller devices */}
            {/* We include Framer Motion animations to make it fancy */}
            <IntroHeadingAnimation
              fontSize="24px"
              letterSpacing="-.48px"
              lineHeight="26.4px"
              left={0}
              startingLeft={"-16.5%"}
            >
              <div className="font-extrabold sm:hidden">
                Frontend Web Developer
                <div style={{ display: "inline-block", color: "orange" }}>
                  .
                </div>
              </div>
            </IntroHeadingAnimation>

            {/* This will only show on large screens and above */}
            {/* We include Framer Motion animations to make it fancy */}
            {/* We pass the offset which is literally the marginTop of our Title element */}
            <BigTextAnimation offSet={"56px"} direction="right">
              <div
                style={{
                  fontSize: "16px",
                  lineHeight: "27px",
                  letterSpacing: "3px",
                  wordSpacing: "6px",
                  marginTop: "56px",
                }}
                className="hidden lg:block"
              >
                Welcome to my digital realm, where I engineer captivating and
                responsive frontend experiences. With a passion for quality, I
                seamlessly blend creativity with cutting-edge technologies to
                redefine the standards of frontend excellence. Explore my
                portfolio, and let's elevate your online presence together.
              </div>
            </BigTextAnimation>

            {/* This will show on small and medium-sized devices  */}
            {/* We include Framer Motion animations to make it fancy */}
            {/* We pass the offset which is literally the marginTop of our Title element */}
            <BigTextAnimation offSet={"56px"} direction="right">
              <div
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "2px",
                  wordSpacing: "4px",
                  marginTop: "56px",
                }}
                className="hidden sm:block lg:hidden"
              >
                Welcome to my digital realm, where I engineer captivating and
                responsive frontend experiences. With a passion for quality, I
                seamlessly blend creativity with cutting-edge technologies to
                redefine the standards of frontend excellence. Explore my
                portfolio, and let's elevate your online presence together.
              </div>
            </BigTextAnimation>

            {/* This will show on mobile phones and smaller devices  */}
            {/* We include Framer Motion animations to make it fancy */}
            {/* We pass the offset which is literally the marginTop of our Title element */}
            <BigTextAnimation offSet={"56px"} direction="right">
              <div
                style={{
                  fontSize: "14px",
                  lineHeight: "21px",
                  letterSpacing: "1px",
                  wordSpacing: "2px",
                  marginTop: "56px",
                }}
                className="sm:hidden"
              >
                Welcome to my digital realm, where I engineer captivating and
                responsive frontend experiences. With a passion for quality, I
                seamlessly blend creativity with cutting-edge technologies to
                redefine the standards of frontend excellence. Explore my
                portfolio, and let's elevate your online presence together.
              </div>
            </BigTextAnimation>

            {/* This will only show on large devices and above */}
            {/* We include Framer Motion animations to make it fancy */}
            <IntroHeadingAnimation
              fontSize="16px"
              lineHeight="27px"
              letterSpacing="3px"
              left={0}
              startingLeft={"-100px"}
            >
              <div className="text-sky-400 hidden lg:block mt-2">- Devmwas</div>
            </IntroHeadingAnimation>

            {/* This will show on small and medium-sized devices  */}
            {/* We include Framer Motion animations to make it fancy */}
            <IntroHeadingAnimation
              fontSize="16px"
              lineHeight="24px"
              letterSpacing="2px"
              left={0}
              startingLeft={"-100px"}
            >
              <div className="text-sky-400 hidden sm:block lg:hidden">
                - Devmwas
              </div>
            </IntroHeadingAnimation>

            {/* This will show on mobile phones and smaller devices  */}
            {/* We include Framer Motion animations to make it fancy */}
            <IntroHeadingAnimation
              fontSize="14px"
              lineHeight="21px"
              letterSpacing="1px"
              left={0}
              startingLeft={"-100px"}
            >
              <div className="text-sky-400 sm:hidden">- Devmwas</div>
            </IntroHeadingAnimation>

            {/* This will only show on large devices and above */}
            <div
              style={{ marginTop: "56px" }}
              className="mt-20 hidden lg:block"
            >
              {/* We include Framer Motion animations to make it fancy */}
              <IntroButtonAnimation>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={() => setIsMessageOpen(true)}
                >
                  <div className="font-bold">Let's Talk</div>
                </Button>
              </IntroButtonAnimation>
            </div>

            {/* This will show on small and medium-sized devices  */}
            <div
              style={{ marginTop: "56px" }}
              className="mt-20 hidden sm:block lg:hidden"
            >
              {/* We include Framer Motion animations to make it fancy */}
              <IntroButtonAnimation>
                <Button
                  variant="outlined"
                  color="primary"
                  size="medium"
                  onClick={() => setIsMessageOpen(true)}
                >
                  <div className="font-bold">Let's Talk</div>
                </Button>
              </IntroButtonAnimation>
            </div>

            {/* These BUTTON will only show on mobile phones and smaller devices  */}
            <div style={{ marginTop: "56px" }} className="mt-12 sm:hidden">
              {/* We include Framer Motion animations to make it fancy */}
              <IntroButtonAnimation>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={() => setIsMessageOpen(true)}
                >
                  <div className="font-bold">Let's Talk</div>
                </Button>
              </IntroButtonAnimation>
            </div>
          </div>

          {/* These points will be only visible on larger devices and higher */}
          <div
            style={{
              position: "absolute",
              // Width is 70% of container width(2/3) for some reason
              width: "46.667vw",
              height: "70vh",
              overflow: "hidden",
              borderRadius: "2%",
              right: "1vw",
              opacity: 0.6,
              backgroundImage:
                "linear-gradient(to top right, black, darkBlue, black)",
            }}
            className="lg:flex flex-wrap hidden z-0"
          >
            <Lines />
          </div>

          {/* These lines will be visible on medium-sized devices and lower */}
          <div
            style={{
              position: "absolute",
              right: "1vw",
              width: "48vw",
              height: "70vh",
              overflow: "hidden",
              borderRadius: "2%",
              opacity: 0.6,
              backgroundImage:
                "linear-gradient(to top right, black, darkBlue, black)",
            }}
            className="flex flex-wrap lg:hidden"
          >
            <Lines />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
