import React from 'react';
import './Row.css';

import { Avatar } from '@material-ui/core';

function Row({ title, Icon, src }) {
  return (
    <div className="row">
      {src && <Avatar src={src} /> }
      {Icon && <Icon /> }
      <h4>{title}</h4>
    </div>
  );
}

export default Row;
