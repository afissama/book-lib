import side_style from "../../styles/Layouts/Sidebar.module.css";
import MenuItem from "./MenuItem";

const SideBar = (props) =>{
    return (
        <div className={side_style.sidebar}>
            <div className={side_style['app-name']}>

            </div>
            <ul>
                <MenuItem label = "All"/>
                <MenuItem label = "Art"/>
                <MenuItem label = "Science"/>
                <MenuItem label = "Science"/>
            </ul>
        </div>
    );
}

export default SideBar;
