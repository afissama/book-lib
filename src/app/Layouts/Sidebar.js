import side_style from "../../styles/Layouts/Sidebar.module.css";
import MenuItem from "./MenuItem";

const SideBar = (props) =>{
    return (
        <div className={side_style.sidebar}>
            <div className={side_style['app-name']}>

            </div>
            <ul>
                <MenuItem label = "ART" category={1}/>
                <MenuItem label = "SCIENCE" category={2}/>
                <MenuItem label = "BIOLOGY" category={4}/>
                <MenuItem label = "LITERATURE" category={5}/>
                <MenuItem label = "HEALTH" category={6}/>
                <MenuItem label = "MOST POPULAR" category={100}/>
            </ul>
        </div>
    );
}

export default SideBar;
