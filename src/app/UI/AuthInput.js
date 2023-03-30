import styles from '../../styles/Auth/AuthInput.module.css'
const AuthInput = (props)=> {
    return(
        <div className='form-group'>
            <label className={`${styles['auth-label']}`}  htmlFor={props.id}>{props.label}</label>
            <input  className={`${styles['auth-input']} form-control`} type={props.type} id={props.id} value={props.value}/>
        </div>
    );
}

export default AuthInput;
