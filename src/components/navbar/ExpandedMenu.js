import React from "react";
import CloseIcon from "@mui/icons-material/Close";

function ExpandedMenu({
  setShowExpandedMenu,
  setShouldScroll,
  setScrollPosition,
  scrollPosition,
}) {
  console.log("scroll pos", scrollPosition);
  return (
    <div
      className="flex flex-col justify-center"
      style={{
        width: "100vw",
        height: "100vh",
        zIndex: 100,
        opacity: 1,
        backgroundColor: "black",
      }}
    >
      <div>
        <div
          className="cursor-pointer text-center"
          onClick={() => {
            setScrollPosition(scrollPosition);
            setShouldScroll(true);
            setShowExpandedMenu((show) => !show);
          }}
        >
          <CloseIcon fontSize="large" color="primary" />
        </div>
        <div className="text-center text-sky-400">
          <div className="cursor-pointer">About</div>
          <div className="cursor-pointer">Education</div>
          <div className="cursor-pointer">Projects</div>
          <div className="cursor-pointer">Contacts</div>
          <div className="cursor-pointer">Resume</div>
        </div>
      </div>
    </div>
  );
}

export default ExpandedMenu;
