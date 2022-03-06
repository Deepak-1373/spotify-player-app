import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
  faEllipsis,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import "./MusicPlayer.css";

export const PlayerControl = ({ isPlaying, setIsPlaying }) => {
  return (
    <div className="music-control-panel">
      <div>
        <button className="ellipsis-btn">
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>
      <div>
        <button className="skip-btn">
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
        <button className="skip-btn">
          <FontAwesomeIcon icon={faForward} />
        </button>
      </div>

      <div>
        <button className="volume-btn">
          <FontAwesomeIcon icon={faVolumeHigh} />
        </button>
      </div>
    </div>
  );
};
