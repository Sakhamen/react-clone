import React, { useState } from 'react';
import './Header.css';
import { Link } from "react-router-dom";

// Icons
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';

function Header() {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg"
            alt="YouTube Logo"
          />
        </Link>
      </div>

      <div className="header__input">
        <input
          placeholder="Search"
          type="text"
          value={inputSearch}
          onChange={e => setInputSearch(e.target.value)}
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallSharpIcon className="header__icon" />
        <AppsSharpIcon  className="header__icon" />
        <NotificationsIcon  className="header__icon" />
        <Avatar
          alt="My Github Account Image"
          src="https://avatars3.githubusercontent.com/u/9292544?s=460&u=f9bdace05bcf793e7c701b2c5a7259c70b70e0f5&v=4"
        />
      </div>
    </div>
  );
}

export default Header;
