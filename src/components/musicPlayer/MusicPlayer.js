import "./MusicPlayer.css";
import Cover from "./Cover.jpg";
import Vector from "./Vector.png";
import Ellipse from "./Ellipse 3.png";

export const MusicPlayer = () => {
  return (
    <div className="musicPlayer">
      <div className="musicPlayer-title">
        <h3>Starboy</h3>
        <p>The Weekend</p>
      </div>
      <div className="musicPlayer-image">
        <img src={Cover} alt="Cover Image" />
      </div>
      <div className="musicPlayer-buttons">
        <img src={Ellipse} alt="Ellipse Logo" className="ellipse-logo"></img>
        <img src={Vector} alt="Vector Logo" className="vector-logo"></img>
        <div className="playPause-div">
          <img />
          <img />
          <img />
        </div>
      </div>
    </div>
  );
};
