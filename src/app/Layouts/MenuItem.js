import item_styles from '../../styles/Layouts/MenuItem.module.css'
const MenuItem = (props) => {
    return (
        <li className={item_styles.item}>
            <a><span>{props.label}</span></a>
        </li>
    );
}

export default MenuItem;
