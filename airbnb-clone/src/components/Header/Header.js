import React, { useState } from 'react';
import './Header.css';
import { Link } from "react-router-dom";

import logo from '../../images/airbnb-logo.png';

import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={logo}
          alt="Airbnb Logo"
        />
      </Link>

      <div className="header__center">
        <input
          type="text"
          value={inputSearch}
          onChange={e => setInputSearch(e.target.value)}
        />
        <Link to={{pathname: '/search', state: {inputSearch}}}>
          <SearchIcon />
        </Link>
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
