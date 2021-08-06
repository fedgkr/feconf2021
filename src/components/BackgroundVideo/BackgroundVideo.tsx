import React, { useRef } from 'react';
import { container } from './BackgroundVideo.module.scss';
import ReactHlsPlayer from 'react-hls-player';

interface BackgroundVideoProps {}

const videoUrl = 'https://cdn.hcker.co/videos/d5642560-fa2b-11eb-8b47-d9e0185a81c4/d5642560-fa2b-11eb-8b47-d9e0185a81c4.m3u8';

const BackgroundVideo: React.FC<BackgroundVideoProps> = () => {
  const playerRef = useRef();
  return (
    <div className={container}>
      <ReactHlsPlayer
        playerRef={playerRef}
        src={videoUrl}
        loop={true}
        muted={true}
        playsInline={true}
        autoPlay={true}
        controls={false}
        width="100%"
        height="auto"
      />
    </div>
  );
}

export default BackgroundVideo;
