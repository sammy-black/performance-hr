import "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <header className="Toolbar">
    <Logo />

    <button className="btn get-started-btn mobile-only">
      Get Started
    </button>

    {props.open ? (
      <button onClick={props.clicked} className="close-btn mobile-only">
        Close
      </button>
    ) : (
      <DrawerToggle clicked={props.clicked} />
    )}

    <nav className="desktop-view-only">
      <NavigationItems clicked={props.clicked} />
    </nav>

    <button className="btn get-started-btn desktop-view-only">
      Get Started
    </button>
  </header>
);

export default toolbar;
