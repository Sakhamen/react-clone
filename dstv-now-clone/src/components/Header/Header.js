import React from 'react';
import './Header.css';

import logo from '../../images/logo.png';

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/">
          <img
            className="header__logo"
            src={logo}
            alt="DSTV Logo"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
