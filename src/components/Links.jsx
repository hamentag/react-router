import {Link} from "react-router-dom";

export default function Links() {
    return (
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/links">Links</Link>
      </div>
    );
  }