import "./PlayerList.css";

export const PlayerList = () => {
  return (
    <div className="playerList">
      <div className="playerList-searchbar">
        <h2>For You</h2>
        <input type="search" placeholder="Search Song, Artist" />
      </div>
      <div className="playerList-playlist">
        <img alt="Album Poster" src="../sidebar/Vector.png" />
        <div className="playerList-album-title">
          <h3>Starboy</h3>
          <p>The Weekend</p>
        </div>
        <p>4:16</p>
      </div>
    </div>
  );
};
