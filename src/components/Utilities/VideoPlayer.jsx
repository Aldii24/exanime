"use client";

import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const option = {
    width: 350,
    height: 350,
  };

  return (
    <>
      <div>
        <YouTube
          onReady={(event) => event.target.pauseVideo()}
          videoId={youtubeId}
          opts={option}
        />
      </div>
    </>
  );
};

export default VideoPlayer;
