import React, { useState, useEffect } from 'react';
import logo from './Instagram_logo_2016.svg';
import './App.css';
import VideoCard from './components/VideoCard';
import db from './firebase';

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    // App component will run once when it loads
    db.collection('reels').onSnapshot(snapshot => {
      setReels(snapshot.docs.map(doc => doc.data()));
    });
  }, []);

  return (
    // BEM naming convention
    <div className="app">
      <div className="app__top">
        <img
          className="app__logo"
          src={logo}
          alt="Instagram logo"
        />
        <h1>Reels</h1>
      </div>

      <div className="app__videos">
        {reels.map(({avatarSrc, channel, url, song, likes, shares}, idx) => (
          <VideoCard
            key={idx}
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

// "http://techslides.com/demos/sample-videos/small.webm"

export default App;
