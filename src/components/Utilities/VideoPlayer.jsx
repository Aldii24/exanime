"use client";

import { XSquare } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const option = {
    width: 250,
    height: 250,
  };

  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevstate) => !prevstate);
  };

  const Player = () => {
    return (
      <>
        <div className="fixed bottom-3 right-3 ">
          <button
            className="float-right text-color-primary"
            onClick={handleVideoPlayer}
          >
            <XSquare size={35} />
          </button>
          <YouTube
            onReady={(event) => event.target.pauseVideo()}
            videoId={youtubeId}
            opts={option}
          />
        </div>
      </>
    );
  };

  return isOpen ? (
    <Player />
  ) : (
    <button className="fixed bottom-3 right-3 w-44 p-2 text-color-primary bg-color-papaya rounded-full font-bold text-xl" onClick={handleVideoPlayer}>
      Tonton trailer?
    </button>
  );
};

export default VideoPlayer;
