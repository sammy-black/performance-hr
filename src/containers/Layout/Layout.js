import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import "./Layout.css";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer((prevValue) => !prevValue);
  };
  return (
    <div>
      <Toolbar clicked={sideDrawerToggleHandler} open={showSideDrawer} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <main className="content">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
