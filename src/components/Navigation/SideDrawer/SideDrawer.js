import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";

const sideDrawer = (props) => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <div className={attachedClasses.join(" ")}>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
