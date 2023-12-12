import Logo from "./Logo";
import Menu from "./Menu";

function Navbar({ setShowExpandedMenu, showNavbar }) {
  if (showNavbar)
    return (
      <div
        className="flex p-2 md:p-4 justify-between opacity-90 bg-black z-50"
        style={{ width: "100%", position: "fixed" }}
      >
        <Logo />
        <Menu setShowExpandedMenu={setShowExpandedMenu} />
      </div>
    );

  // We hide the Navbar on scrolling down
  return (
    <div
      className="flex p-2 md:p-4 justify-between opacity-90 bg-black z-50"
      style={{ width: "100%", position: "fixed", top: "-100px" }}
    >
      <Logo />
      <Menu setShowExpandedMenu={setShowExpandedMenu} />
    </div>
  );
}

export default Navbar;
