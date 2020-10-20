import React from 'react';
import './Catchup.css';

import MovieRow from '../../components/MovieRow/MovieRow';

function Catchup() {
  return (
    <div className="catchup">
      <MovieRow
        isLargeRow
        identifier="recent"
        title="TV shows you're watching"
      />
      <MovieRow
        identifier="latest"
        title="What to Watch"
      />
      <MovieRow
        identifier="original"
        title="Mzansi Originals"
      />
      <MovieRow
        identifier="local"
        title="Best Of Local"
      />
    </div>
  );
}

export default Catchup;
