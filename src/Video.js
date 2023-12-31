import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
    // if the video is playing
    // stop it...

    // otherwise if its not playing
    // play it...
  }

  return (
    <div className='video'>
      <video
       onClick={handleVideoPress}
       loop
       ref={videoRef}
       className='video_player'
       src={url} alt="video"
      /> 
      
      

      <VideoFooter channel={channel}
        description={description}
        song={song}
      />
      <VideoSidebar likes={likes} shares={shares}
        messages={messages}
      />
    </div>
  )
}

export default Video;