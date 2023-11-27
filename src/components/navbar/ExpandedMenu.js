import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { createPortal } from "react-dom";

function ExpandedMenu({ setShowExpandedMenu, showExpandedMenu }) {
  if (!showExpandedMenu) return null;
  return createPortal(
    <div
      className="flex flex-col justify-center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 100,
        opacity: 1,
        backgroundColor: "black",
      }}
    >
      <div>
        <div
          className="cursor-pointer text-center"
          onClick={() => {
            setShowExpandedMenu(false);
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
    </div>,
    document.querySelector("#expandedMenuPortal")
  );
}

export default ExpandedMenu;
