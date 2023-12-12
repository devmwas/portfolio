import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

function MenuIconComp({ setShowExpandedMenu }) {
  return (
    <div
      className="my-auto lg:hidden cursor-pointer"
      onClick={() => {
        setShowExpandedMenu((show) => !show);
      }}
    >
      <MenuIcon fontSize="medium" color="primary" />
    </div>
  );
}

export default MenuIconComp;
