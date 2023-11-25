import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

function MenuIconComp({ setShowExpandedMenu }) {
  return (
    <div
      className="my-auto sm:hidden cursor-pointer"
      onClick={() => {
        setShowExpandedMenu((show) => !show);
      }}
    >
      <MenuIcon fontSize="large" color="primary" />
    </div>
  );
}

export default MenuIconComp;
