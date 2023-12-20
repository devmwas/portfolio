import { useEffect, useState } from "react";
import Intro from "./components/Intro";
import Navbar from "./components/navbar/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";
import ExpandedMenu from "./components/navbar/ExpandedMenu";
import SendMessageStatus from "./components/SendMessageStatus";
import MessageModal from "./components/MessageModal";

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
      <Navbar
        setShowExpandedMenu={setShowExpandedMenu}
        showNavbar={showNavbar}
      />
      <div className="lg:w-2/3 mx-auto bg-black">
        {/* This will be the message component users will use to send us messages */}
        <MessageModal
          isMessageOpen={isMessageOpen}
          setIsMessageOpen={setIsMessageOpen}
          setSent={setSent}
        />
        {/* This will inform the user whether their message has been sent or not */}
        <SendMessageStatus sent={sent} setSent={setSent} />
        <ExpandedMenu
          setShowExpandedMenu={setShowExpandedMenu}
          showExpandedMenu={showExpandedMenu}
        />
        <Intro
          isMessageOpen={isMessageOpen}
          setIsMessageOpen={setIsMessageOpen}
        />
        <About />
        <Projects />
        <div className="mx-auto px-2 md:p-0" style={{ maxWidth: "750px" }}>
          <Education />
        </div>
        <Footer setIsMessageOpen={setIsMessageOpen} />
      </div>
    </div>
  );
}

export default App;
