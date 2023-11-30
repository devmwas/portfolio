import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { createPortal } from "react-dom";
import { Button } from "@mui/material";

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
          <div className="cursor-pointer">
            <a href="#home" onClick={() => setShowExpandedMenu(false)}>
              Home
            </a>
          </div>
          <div className="cursor-pointer">
            <a href="#about" onClick={() => setShowExpandedMenu(false)}>
              About
            </a>
          </div>
          <div className="cursor-pointer">
            <a href="#projects" onClick={() => setShowExpandedMenu(false)}>
              Projects
            </a>
          </div>
          <div className="cursor-pointer">
            <a href="#education" onClick={() => setShowExpandedMenu(false)}>
              Education
            </a>
          </div>
          <div className="cursor-pointer mt-2" style={{}}>
            <a href="#resume" onClick={() => setShowExpandedMenu(false)}>
              <Button variant="outlined" size="small">
                Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#expandedMenuPortal")
  );
}

export default ExpandedMenu;
