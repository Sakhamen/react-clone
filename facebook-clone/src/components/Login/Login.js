import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
import { actionTypes } from '../../store/reducer';
import { useStateValue } from '../../store/StateProvider';

import logo from '../../images/facebook-logo.png';
import text from '../../images/facebook-text.png';

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithPopup(provider)
    .then((result) => {
      // console.log('signInWithPopup result', result);
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      });
    })
    .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src={logo}
          alt="Facebook Logo"
        />
        <img
          src={text}
          alt="Facebook Logo"
        />
      </div>

      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
