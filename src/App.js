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

  return (
    <div className="text-white bg-black w-full">
      {!showExpandedMenu && (
        // We dont want any other component to be mounted on the DOM whenever the menu is open
        <Navbar setShowExpandedMenu={setShowExpandedMenu} />
      )}
      {/* <h1>My Portfolio</h1> */}
      <div className="lg:w-2/3 mx-auto bg-black">
        {showExpandedMenu && (
          <ExpandedMenu setShowExpandedMenu={setShowExpandedMenu} />
        )}
        {!showExpandedMenu && <Intro />}
        {!showExpandedMenu && <About />}
        {!showExpandedMenu && <Projects />}
        {!showExpandedMenu && (
          <div
            className="bg-red-500 mx-auto lg:w-4/5 px-2 md:p-0"
            style={{ maxWidth: "750px" }}
          >
            <Education />
          </div>
        )}
        {!showExpandedMenu && <Footer />}
      </div>
    </div>
  );
}

export default App;
