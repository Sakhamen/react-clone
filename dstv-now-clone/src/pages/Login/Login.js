import React from 'react';
import './Login.css';
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <h3>Who's watching DSTV?</h3>

      <div className="login__profiles">
        <div className="login__info">
          <Link to="/catchup">
            <img
              src={require('../../images/1.png')}
              alt="avatar 1"
              className="login__avatar"
            />
          </Link>
          <span>Emkay</span>
        </div>

        <div className="login__info">
          <Link to="/catchup">
            <img
              src={require('../../images/2.png')}
              alt="avatar 2"
              className="login__avatar"
            />
          </Link>
          <span>Sakhamen</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
