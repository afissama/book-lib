import AuthBtn from "./AuthBtn";
import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";
import styles from "../../styles/Auth/Login.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <AuthCard>
      <div className={`${styles["form-head"]}`}>
        <h3 className="m-0">Create an Account</h3>
        <p>Enter your email address and password to create account.</p>
      </div>
      <form className="mt-4 form-text">
        <div className="form-group">
          <AuthInput id="email" label="E-MAIL" type="email" />
          <AuthInput id="password" label="Password" type="password" />
          <AuthInput id="conf-password" label="Confirm Password" type="password" />
          <div className="mt-5">
            <AuthBtn type="submit">Sign Up</AuthBtn>
            <div className={`${styles["form-head"]}`}>
              <span>
                Already have an account? <Link to={'/login'}>Sign In</Link>
              </span>
            </div>
          </div>
        </div>
      </form>
    </AuthCard>
  );
};

export default SignUp;
