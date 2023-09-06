import { Link } from "react-router-dom";
const LeftButtons = (props) => {
  return (
    <Link to={props.url}>
      <div className="menus" id={props.name}>
        <span className="btn" id="sidenav">
          {props.name}
        </span>
      </div>
    </Link>
  );
};

export default LeftButtons;
