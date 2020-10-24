import React, { useState, useEffect } from "react";
import "./VideoResults.css";

import axios from "../../api/axios";
import FlipMove from "react-flip-move";
import VideoCard from "../VideoCard/VideoCard";

function VideoResults({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption.toString());
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className="videoResults">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default VideoResults;
