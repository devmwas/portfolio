import { useState } from "react";
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
  const [sent, setSent] = useState(true);

  return (
    <div className="text-white bg-black w-full">
      <Navbar setShowExpandedMenu={setShowExpandedMenu} />
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
        <div
          className="mx-auto lg:w-full px-2 md:p-0"
          style={{ maxWidth: "750px" }}
        >
          <Education />
        </div>
        <Footer setIsMessageOpen={setIsMessageOpen} />
      </div>
    </div>
  );
}

export default App;
