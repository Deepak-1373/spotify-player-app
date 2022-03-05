import "./PlayerList.css";
import Album from "./album.png";
import { useState } from "react/cjs/react.production.min";

export const PlayerList = ({ musicData }) => {
  const [data, setData] = useState(musicData);
  console.log(musicData);
  return (
    <div className="playerList">
      <div className="playerList-searchbar">
        <h2>For You</h2>
        <input type="text" placeholder="Search Song, Artist" />
      </div>

      {data &&
        data.map(({ id, title, artist, url, photo, duration }) => (
          <div className="playerList-playlist">
            <img alt="Album Poster" src={photo} />
            <div className="playerList-album-title">
              <h3>{title}</h3>
              <p>{artist}</p>
            </div>
            <p>{duration}</p>
          </div>
        ))}
    </div>
  );
};
