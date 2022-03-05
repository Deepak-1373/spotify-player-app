import "./MusicPlayer.css";
import Cover from "./Cover.jpg";

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
      <div className="musicPlayer-buttons"></div>
    </div>
  );
};
