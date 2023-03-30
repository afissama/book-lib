import nav_style from "../../styles/Layouts/Navbar.module.css";
import "../../styles/Layouts/layouts.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

const NavBar = (props) => {
  const topBarRef = useRef(null);

  const navBarExpend = () => {
    if (topBarRef.current.className === "topnav") {
      topBarRef.current.className += " responsive";
    } else {
      topBarRef.current.className = 'topnav';
    }
  };


  return (
    <div className={nav_style.navbar}>
      <div className="topnav" id="myTopnav" ref={topBarRef}>
        <Link to="/" className="active">
          Home
        </Link>
        <Link to="/login">Sign In</Link>
        <a href="javascript:void(0);" className="icon" onClick={navBarExpend}>
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
