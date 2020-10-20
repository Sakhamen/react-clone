import React, { useState, useEffect } from 'react';
import './MovieRow.css';
import localData from '../../data/sampleData.json';

function MovieRow({ title, identifier, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
       // console.log('localData', localData);
       setMovies(localData[identifier]);
   }, [identifier]);

  return (
    <div className="movieRow">
      <h3 className="movieRow__title">{title}</h3>

      <div className="movieRow__posters">
        {movies.map(movie => (
          <img
            key={movie.id}
            className={`movieRow__poster ${isLargeRow && "movieRow__posterLarge"}`}
            src={movie.thumbnail}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
