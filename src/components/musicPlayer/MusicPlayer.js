import "./MusicPlayer.css";
import Cover from "./Cover.jpg";
import Vector from "./Vector.png";
import Forward from "./forward.png";
import Backward from "./backward.png";
import Play from "./play.png";
import Frame from "./Frame.png";
import { Image } from "./Image";

export const MusicPlayer = ({ url }) => {
  return (
    <div className="musicPlayer">
      <div className="musicPlayer-title">
        <h3>Starboy</h3>
        <p>The Weekend</p>
      </div>
      <div className="musicPlayer-image">
        <img src={url === "" ? Cover : url} alt="Cover Image" />
      </div>
      <div className="musicPlayer-buttons">
        <Image path={Vector} alt="Vector Logo" image="image-vector" />

        <div className="music-controls">
          <Image path={Backward} alt="Backward Logo" imageSize="image-small" />
          <Image path={Play} alt="Play/Pause Logo" imageSize="image-play" />
          <Image path={Forward} alt="Forward Logo" imageSize="image-small" />
        </div>

        <Image path={Frame} alt="Volumne Logo" />
      </div>
    </div>
  );
};
