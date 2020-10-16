import React from 'react';
import './Feed.css';
import Post from './Post/Post';
import StoryReel from './StoryReel/StoryReel';
import MessageSender from './MessageSender/MessageSender';

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://avatars3.githubusercontent.com/u/9292544?s=460&u=f9bdace05bcf793e7c701b2c5a7259c70b70e0f5&v=4"
        message="Testing 123"
        timestamp="timestamp"
        username="sakhamen"
        image=""
      />
      <Post
        profilePic="https://avatars3.githubusercontent.com/u/9292544?s=460&u=f9bdace05bcf793e7c701b2c5a7259c70b70e0f5&v=4"
        message="This works"
        timestamp="timestamp"
        username="sakhamen"
        image="https://miro.medium.com/max/900/0*UqGyYmWCRQnjLzSk.jpg"
      />
    </div>
  );
}

export default Feed;
