import { Button } from "@mui/material";
import Lines from "./Lines";
import IntroHeadingAnimation from "./animations/IntroHeadingAnimation";
import IntroButtonAnimation from "./animations/IntroButtonAnimation";
import IntroBigTextAnimation from "./animations/IntroBigTextAnimation";
import NameAnimation from "./animations/NameAnimation";

function Intro({ setIsMessageOpen }) {
  return (
    <div
      className="p-2 flex flex-col h-[100vh] max-w-[100%]"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, darkBlue, black, darkBlue)",
      }}
      id="home"
    >
      {/* Contaner for our Intro component's contents */}
      <div className="my-auto">
        <div className="flex relative" style={{ height: "70vh" }}>
          <div className="my-auto sm:w-5/6 z-30">
            {/* Greetings */}
            <div
              // Here, we'll set the text size(text), line height(leading) and letter spacing(tracking)
              // for different screen sizes using one giant TailwindCSS class name
              className="text-sky-400 text-[14px] sm:text[16px] lg:text-[16px] leading-[21px]
              sm:leading-[24px] lg:leading-[27px] tracking-[1px] sm:tracking-[2px] lg:tracking-[3px]"
            >
              Hello. It's your
            </div>

            {/* We include Framer Motion animations to make it fancy */}
            <IntroHeadingAnimation>
              <div
                // Tracking didnt support letter-spacing animations so I had to remove it
                // tracking-[-0.48px] sm:tracking-[-0.64px] lg:tracking-[-1px]
                className="font-extrabold text-[24px] sm:text-32px] lg:text-[40px]
                leading-[26.4px] sm:leading-[35.2px] lg:leading-[44px]"
              >
                Fullstack Web Developer
                <div style={{ display: "inline-block", color: "orange" }}>
                  .
                </div>
              </div>
            </IntroHeadingAnimation>

            {/* We include Framer Motion animations to make it fancy */}
            {/* We pass the offset which is literally the marginTop of our Title element */}
            {/* <IntroBigTextAnimation offSet={"56px"} direction="right"> */}
            <div
              style={{
                // This used to be lg:6px md:4px 2px for lower devices. But then I had to make a
                // trade-off beween fanciness and functionality and code cleanliness
                wordSpacing: "3px",
              }}
              className="text-[14px] mt-[56px] sm:text-[16px] lg:text-[16px] leading-[27px] sm:leading-[24px] 
                lg:leading-[21px] tracking-[1px] sm:tracking-[2px] lg:tracking-[3px]"
            >
              I craft dynamic, responsive, and scalable web solutions. I
              seamlessly integrate creativity with cutting-edge fullstack
              technologies to build robust web applications. My portfolio is
              testament to my vast array of experience, spanning both the
              frontend and the backend domains. Have a look!
            </div>
            {/* </IntroBigTextAnimation> */}

            {/* This will only show on large devices and above */}
            {/* We include Framer Motion animations to make it fancy */}
            <NameAnimation>
              <div
                // Tracking didnt support letter-spacing animations so I had to remove it
                // tracking-[1px] sm:tracking-[2px] lg:tracking-[3px]"
                className="text-sky-400 mt-2 text-[14px] sm:text-[16px] lg:text-[16px] 
                leading-[21px] sm:leading-[24px] lg:leading-[27px]"
              >
                - Devmwas
              </div>
            </NameAnimation>

            {/* Call To Action button - (LET'S TALK BUTTON) */}
            <div style={{ marginTop: "56px" }} className="mt-12 sm:mt-20">
              {/* We include Framer Motion animations to make it fancy */}
              <IntroButtonAnimation>
                <Button
                  fullWidth
                  variant="outlined"
                  color="primary"
                  onClick={() => setIsMessageOpen(true)}
                >
                  <div className="font-bold">Let's Talk</div>
                </Button>
              </IntroButtonAnimation>
            </div>
          </div>

          {/* This is just a fancy background for aesthetics*/}
          <div
            style={{
              backgroundImage:
                "linear-gradient(to top right, black, darkBlue, black)",
            }}
            className="absolute right-[2vh] h-[70vh] overflow-hidden rounded-[2%] opacity-60 
            flex flex-wrap z-0 w-[48vw] lg:w-[46.667vw]"
          >
            <Lines />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
