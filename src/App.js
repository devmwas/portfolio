import { useEffect, useState, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
const Intro = lazy(() => import("./components/Intro"));
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Education = lazy(() => import("./components/Education"));
const Footer = lazy(() => import("./components/Footer"));
const ExpandedMenu = lazy(() => import("./components/navbar/ExpandedMenu"));
const SendMessageStatus = lazy(() => import("./components/SendMessageStatus"));
const MessageModal = lazy(() => import("./components/MessageModal"));

function App() {
  const [showExpandedMenu, setShowExpandedMenu] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [sent, setSent] = useState();
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollTop, setPrevScrollTop] = useState(0);

  // We hide the Navbar while scrolling down and make it reappear on scrolling up or on refresh
  const handleScroll = () => {
    const currentScrollTop = window.scrollY;
    // Hiding the Navbar on scrolling down and vice versa
    prevScrollTop < currentScrollTop
      ? setShowNavbar(false)
      : setShowNavbar(true);
    // Showing the Navbar on refresh
    prevScrollTop === 0 && setShowNavbar(true);
    // We then set the previous scrollTop value to the current scrollTop
    setPrevScrollTop(currentScrollTop);
  };

  // We hide or show the Navbar deending on the scrollY direction
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollTop]);

  return (
    <div style={{ overflow: "hidden" }} className="text-white bg-black w-full">
      {/* We include a fallback UI using Suspense which will show while component is bring imported */}
      <Suspense>
        <Navbar
          setShowExpandedMenu={setShowExpandedMenu}
          showNavbar={showNavbar}
        />
      </Suspense>
      <div className="lg:w-2/3 mx-auto bg-black">
        {/* This will be the message component users will use to send us messages */}
        {/* Animate Presence will help us animate the exit/unmount behaviour of our component */}
        <Suspense>
          <AnimatePresence initial={false} mode="wait">
            {isMessageOpen && (
              <MessageModal
                isMessageOpen={isMessageOpen}
                setIsMessageOpen={setIsMessageOpen}
                setSent={setSent}
              />
            )}
          </AnimatePresence>
        </Suspense>

        {/* This will inform the user whether their message has been sent or not */}
        <Suspense>
          <SendMessageStatus sent={sent} setSent={setSent} />
        </Suspense>

        {/* Animate Presence will help us animate the exit/unmount behaviour of our component */}
        <Suspense>
          <AnimatePresence initial={false} mode="wait">
            {showExpandedMenu && (
              <ExpandedMenu
                setShowExpandedMenu={setShowExpandedMenu}
                showExpandedMenu={showExpandedMenu}
              />
            )}
          </AnimatePresence>
        </Suspense>

        <Suspense>
          <Intro
            isMessageOpen={isMessageOpen}
            setIsMessageOpen={setIsMessageOpen}
          />
        </Suspense>

        <Suspense>
          <About />
        </Suspense>

        <Suspense>
          <Projects />
        </Suspense>

        <div
          className="mx-auto px-2 md:p-0 lg:w-4/5"
          style={{ maxWidth: "750px" }}
        >
          <Suspense>
            <Education />
          </Suspense>
        </div>
        <Suspense>
          <Footer setIsMessageOpen={setIsMessageOpen} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
