import React from "react";
import Links from "./Links";
import MenuIconComp from "./MenuIconComp";

function Menu({ setShowExpandedMenu, showExpandedMenu }) {
  return (
    <div className="my-auto">
      <Links />
      <MenuIconComp
        setShowExpandedMenu={setShowExpandedMenu}
        showExpandedMenu={showExpandedMenu}
      />
    </div>
  );
}

export default Menu;
