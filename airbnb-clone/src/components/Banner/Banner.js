import React, { useState } from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';
import SearchDate from '../SearchDate/SearchDate';
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowState] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <SearchDate />}

        <Button className="banner__searchButton"
          variant='outlined'
          onClick={() => setShowState(!showSearch)}>
          {showSearch ? "Hide" : "Search Dates" }
        </Button>
      </div>

      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>Plan a different kind of gateway to uncover the hidden gems near you.</h5>
        <Button variant='outlined' onClick={() => history.push('/search')}>Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
