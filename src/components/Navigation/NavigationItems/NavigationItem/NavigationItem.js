import "./NavigationItem.css";

const navigationItem = (props) => (
  <li className="NavigationItem">
    <a onClick={props.clicked} className={props.class} href={props.link}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
