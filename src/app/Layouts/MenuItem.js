import { Link } from 'react-router-dom';
import item_styles from '../../styles/Layouts/MenuItem.module.css'
const MenuItem = (props) => {
    return (
        <li className={item_styles.item}>
            <Link to={`/category/${props.category}`}><span>{props.label}</span></Link>
        </li>
    );
}

export default MenuItem;
