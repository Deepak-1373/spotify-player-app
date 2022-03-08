import "./MusicPlayer.css";
import Cover from "../../utility-images/Cover.jpg";
import { PlayerControl } from "./PlayerControl";
import { useState, useEffect, useRef } from "react";

export const MusicPlayer = ({ data }) => {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { url, title, artist, audioPath } = data;

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="music-player flex-column">
      <div className="music-player-mobile-view">
        <div className="music-player-title flex-column">
          <h3>{title === "" ? "Nothing" : title}</h3>
          <p>{artist === "" ? "The Script" : artist}</p>
        </div>
        <div className="music-player-image">
          <img src={url === "" ? Cover : url} alt="Cover Image" />
        </div>
        <div className="music-player-range"></div>
        <div className="music-player-buttons flex">
          <audio
            src={audioPath === "" ? "" : audioPath}
            ref={audioElement}
          ></audio>
          <PlayerControl isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        </div>
      </div>
    </div>
  );
};
