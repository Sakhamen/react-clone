import React, { useState, useRef } from 'react';
import './VideoCard.css';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';

function VideoCard({ avatarSrc, channel, url, song, likes, shares }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      // stop
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      // start
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      {/* Header */}
      <VideoHeader />

      {/* Main */}
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        src={url}
        alt="IG reel video"
        loop
      />

      {/* Footer */}
      <VideoFooter
        avatarSrc={avatarSrc}
        channel={channel}
        song={song}
        likes={likes}
        shares={shares}
      />
    </div>
  );
}

export default VideoCard;
