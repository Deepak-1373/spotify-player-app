import "./MusicPlayer.css";
import Cover from "./utilities/Cover.jpg";
import { PlayerControl } from "./PlayerControl";

export const MusicPlayer = ({ data }) => {
  const { url, title, artist } = data;
  return (
    <div className="musicPlayer">
      <div className="musicPlayer-title">
        <h3>{title === "" ? "Starboy" : title}</h3>
        <p>{artist === "" ? "The Weekend" : artist}</p>
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
