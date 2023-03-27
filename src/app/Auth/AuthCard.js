import styles from '../../styles/Auth/AuthCard.module.css'
const AuthCard = (props) => {
  return (
    <div className={`${styles['signIn']}`}>
    <div className={`row m-0 ${styles['container']}`}>
      <div className={`col-sm-12 align-self-center ${styles['page']}`}>
        <div className={`${styles['form-container']}`}>{props.children}</div>
      </div>
    </div>
    </div>
  );
};

export default AuthCard;
