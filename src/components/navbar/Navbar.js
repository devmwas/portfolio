import Logo from "./Logo";
import Menu from "./Menu";

function Navbar({ setShowExpandedMenu, showNavbar }) {
  // We hidethe Navbar on scrolling down
  if (!showNavbar) return null;

  return (
    <div
      className="flex p-2 md:p-4 justify-between opacity-90 bg-black z-50"
      style={{ width: "100%", position: "fixed" }}
    >
      <Logo />
      <Menu setShowExpandedMenu={setShowExpandedMenu} />
    </div>
  );
}

export default Navbar;
