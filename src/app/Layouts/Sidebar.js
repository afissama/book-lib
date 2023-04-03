import side_style from "../../styles/Layouts/Sidebar.module.css";
import MenuItem from "./MenuItem";

const SideBar = (props) =>{
    return (
        <div className={side_style.sidebar}>
            <div className={side_style['app-name']}>

            </div>
            <ul>
                <MenuItem label = "SCIENCE" category={`science`}/>
                <MenuItem label = "ART" category={`art`}/>
                <MenuItem label = "LITERATURE" category={`literature`}/>
            </ul>
        </div>
    );
}

export default SideBar;
