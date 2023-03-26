import { Outlet } from "react-router-dom";
import NavBar from "./Layouts/Navbar";
import SideBar from "./Layouts/Sidebar";
import page_style from '../styles/Navigation.module.css'

export default function Navigation() {
  return (
    <>
      <SideBar />
      <NavBar />
      <div className="content-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className={page_style["card-content"]}>
                <div className={page_style["card-header-container"]}></div>
                <div className={page_style["card-body"]}>
                  <div className="row">
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
