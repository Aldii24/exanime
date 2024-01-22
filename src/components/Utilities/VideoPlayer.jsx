"use client";

import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const option = {
    width: 340,
    height: 400,
  };

  return (
    <>
      <div className="flex w-full">
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
