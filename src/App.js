import { useState } from "react";
import Intro from "./components/Intro";
import Navbar from "./components/navbar/Navbar";

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
        {/* {showExpandedMenu && (
          <ExpandedMenu
            setShowExpandedMenu={setShowExpandedMenu}
            setShouldScroll={setShouldScroll}
            setScrollPosition={setScrollPosition}
            // We send the scroll position since all components will be unmounted on onmounting expanded menu
            scrollPosition={scrollPosition}
          />
        )} */}
        {!showExpandedMenu && <Intro />}
        {/* {!showExpandedMenu && <About />}
        {!showExpandedMenu && <Projects />}
        {!showExpandedMenu && <Education />}
        {!showExpandedMenu && <Footer />} */}
      </div>
    </div>
  );
}

export default App;
