import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
          <h2>Filter</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJxSIkUif0i_v1U5sLo3yfh1h9AI97wqFLD3Y0H8Rg=s88-c-k-c0x00ffffff-no-rj"
        channel="Sakhamen"
        verified
        subs="404K"
        noOfVideos={50}
        description="You can find awesome house music mixes here! Also, expect producers corner and music from producers around the world. The channel is for everyone..."
      />
      <hr />

      <VideoRow
        title="2020 Birthday Mix by Dj Sakhamen"
        views="1M Views"
        subs="400K"
        timestamp="12 hours ago"
        channel="Sakhamen"
        description="Man braid williamsburg art party affogato, migas fam distillery poutine knausgaard freegan"
        image="https://i.ytimg.com/vi_webp/OXFCBqdDIr8/maxresdefault.webp"
      />
      <VideoRow
        title="2019 Birthday Mix by Dj Sakhamen"
        views="10M Views"
        subs="392K"
        timestamp="5 days ago"
        channel="Sakhamen"
        description="Slow-carb scenester you probably haven't heard of them gochujang vinyl vaporware, squid venmo next level"
        image="https://i.ytimg.com/vi_webp/5j6C7jOfzfw/maxresdefault.webp"
      />
      <VideoRow
        title="Birthday Mix by Dj Sakhamen"
        views="3M Views"
        subs="385K"
        timestamp="15 days ago"
        channel="Sakhamen"
        description="Hashtag biodiesel la croix umami, subway tile chambray stumptown occupy"
        image="https://i.ytimg.com/vi_webp/9qif0owMcaU/maxresdefault.webp"
      />
      <VideoRow
        title="The Deep Tech Voyage 001 by Dj Sakhamen"
        views="1.5M Views"
        subs="308K"
        timestamp="1 month ago"
        channel="Sakhamen"
        description="YOLO tofu authentic locavore single-origin coffee gentrify gochujang craft beer etsy swag put a bird on it keffiyeh"
        image="https://i.ytimg.com/vi_webp/GXGR6mB_EPI/maxresdefault.webp"
      />
      <VideoRow
        title="30 Minutes Absolute Afro/Deep Tech House Music"
        views="500K Views"
        subs="204K"
        timestamp="4 months ago"
        channel="Sakhamen"
        description="La croix hot chicken schlitz, fam palo santo kale chips vaporware iPhone dreamcatcher before they sold out"
        image="https://i.ytimg.com/vi_webp/kdNlNAE_bBo/maxresdefault.webp"
      />
      <VideoRow
        title="The Absolute Resonance #02 Mixed By Dj Sakhamen"
        views="100M Views"
        subs="100K"
        timestamp="1 year ago"
        channel="Sakhamen"
        description=" Bespoke pabst YOLO food truck mlkshk 3 wolf moon"
        image="https://i1.ytimg.com/vi/t9ssoO9yrtY/hqdefault.jpg"
      />
    </div>
  );
}

export default SearchPage;
