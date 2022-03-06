import "./MusicPlayer.css";
import Cover from "../../utilities/Cover.jpg";
import { PlayerControl } from "./PlayerControl";
import { useState, useEffect, useRef } from "react";

export const MusicPlayer = ({ data }) => {
  console.log(data);
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
    <div className="musicPlayer">
      <div className="musicPlayer-title">
        <h3>{title === "" ? "Nothing" : title}</h3>
        <p>{artist === "" ? "The Script" : artist}</p>
      </div>
      <div className="musicPlayer-image">
        <img src={url === "" ? Cover : url} alt="Cover Image" />
      </div>
      <div className="musicPlayer-buttons">
        <audio
          src={audioPath === "" ? "" : audioPath}
          ref={audioElement}
        ></audio>
        <PlayerControl isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </div>
    </div>
  );
};
