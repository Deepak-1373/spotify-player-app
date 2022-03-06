import "./MusicPlayer.css";
import Cover from "./utilities/Cover.jpg";
import { PlayerControl } from "./PlayerControl";

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
        <PlayerControl />
      </div>

      <div></div>
    </div>
  );
};
