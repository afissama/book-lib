import AuthBtn from "../UI/AuthBtn";
import AuthCard from '../UI/AuthCard'
import AuthInput from "../UI/AuthInput";
import styles from '../../styles/Auth/Login.module.css'
import { Link } from "react-router-dom";
const Login = () => {
  return (

    <AuthCard>
        <div className={`${styles['form-head']}`}>
            <h3 className="m-0">Sign In</h3>
            <p>Enter your email address and password to access panel.</p>
        </div>
        <form className="mt-4 form-text">
            <div className="form-group">
                <AuthInput id="email" label="E-MAIL" type="email" />
                <AuthInput id="password" label="Password" type="password" />
                <div className="mt-5">
                    <AuthBtn type="submit">
                        Login
                    </AuthBtn>
                    <div  className={`${styles['form-head']}`}>
                        <span>Don't have an account? <Link to='/signup'>Sign Up</Link> </span>
                    </div>
                </div>
            </div>
        </form>
    </AuthCard>

  );
};

export default Login;
