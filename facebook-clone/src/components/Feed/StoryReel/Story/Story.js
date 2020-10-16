import React from 'react';
import './Story.css';

import { Avatar } from '@material-ui/core';

function Story({ title, image, profileSrc }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar src={profileSrc} className="story__avatar" />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
