import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
   return (
      <nav className="header">
         <Link to="/">
            <img className="header__logo"
               src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
               alt="Amazon Logo"
            />
         </Link>
         <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon" />
         </div>

         <div className="header__nav">
         <Link to="/login" className="header__link">
            <div className="header__option">
               <span className="header__optionLineOne">Hello Sakhamen</span>
               <span className="header__optionLineTwo">Sign Out</span>
            </div>
         </Link>

         <Link to="/login" className="header__link">
            <div className="header__option">
               <span className="header__optionLineOne">Return</span>
               <span className="header__optionLineTwo">& Orders</span>
            </div>
         </Link>

         <Link to="/login" className="header__link">
            <div className="header__option">
               <span className="header__optionLineOne">Your</span>
               <span className="header__optionLineTwo">Prime</span>
            </div>
         </Link>

         <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
               <ShoppingBasketIcon />
            </div>
            <span className="header__basketCount">0</span>
         </Link>

         </div>


      </nav>
   )
}

export default Header
