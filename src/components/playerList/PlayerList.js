import "./PlayerList.css";
import Album from "./album.png";

export const PlayerList = () => {
  return (
    <div className="playerList">
      <div className="playerList-searchbar">
        <h2>For You</h2>
        <input type="text" placeholder="Search Song, Artist" />
      </div>
      <div className="playerList-playlist">
        <img alt="Album Poster" src={Album} />
        <div className="playerList-album-title">
          <h3>Starboy</h3>
          <p>The Weekend</p>
        </div>
        <p>4:16</p>
      </div>
    </div>
  );
};
