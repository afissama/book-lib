import nav_style from "../../styles/Layouts/Navbar.module.css";
import "../../styles/Layouts/layouts.css";

const NavBar = (props) => {
  return (
    <div className={nav_style.navbar}>

      <nav className={nav_style["navbar-expand"]}>
        <div style={{display: "block", marginLeft: 0, padding: "20px 0"}}>
          <h5>Shop</h5>
          <nav>
            <ul className={nav_style["ul-link"]}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home Page</a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <form className={nav_style["form-control"]}>
            <input type="text" placeholder="search here..." />
            <a>
              <i></i>
            </a>
          </form>
        </div>

        <div>
            <ul className={nav_style["user-info"]}>
                <li>
                    <a>
                        <img src="https://templates.iqonic.design/booksto/html/images/user/1.jpg" />
                        <div>
                            <h6>Sign In</h6>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
