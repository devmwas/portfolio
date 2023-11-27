import { useState } from "react";
import Intro from "./components/Intro";
import Navbar from "./components/navbar/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";
import ExpandedMenu from "./components/navbar/ExpandedMenu";

function App() {
  const [showExpandedMenu, setShowExpandedMenu] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  return (
    <div className="text-white bg-black w-full">
      <Navbar setShowExpandedMenu={setShowExpandedMenu} />
      <div className="lg:w-2/3 mx-auto bg-black">
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
          className="bg-red-500 mx-auto lg:w-4/5 px-2 md:p-0"
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
