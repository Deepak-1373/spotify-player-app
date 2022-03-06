import "./MusicPlayer.css";
import Cover from "./Cover.jpg";
import Vector from "./Vector.png";
import Ellipse from "./Ellipse 3.png";
import Forward from "./forward.png";
import Backward from "./backward.png";
import Play from "./play.png";
import Frame from "./Frame.png";

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
        <img src={Vector} alt="Vector Logo" className="vector-logo"></img>
        <div className="playPause-div">
          <div>
            <img src={Backward} alt="Backward Logo" />
          </div>
          <img src={Play} alt="Play/Pause Logo" />
          <div>
            <img src={Forward} alt="Forward Logo" />
          </div>
        </div>
        <img src={Frame} alt="Volume Logo" />
      </div>
    </div>
  );
};
