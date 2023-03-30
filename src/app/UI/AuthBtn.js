import React from 'react';
import classes from '../../styles/Auth/AuthBtn.module.css';

const AuthBtn = (props) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} btn d-block mb-2`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default AuthBtn;
