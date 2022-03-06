import "./PlayerList.css";
import { useState, useEffect } from "react";

export const PlayerList = ({ musicData, handleClick }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData((prevData) => musicData.getSongs);
  }, [musicData]);

  return (
    <div className="playerList">
      <div className="playerList-searchbar">
        <h2>For You</h2>
        <input type="text" placeholder="Search Song, Artist" />
      </div>

      <div className="song-list">
        {data &&
          data.map(({ id, title, artist, url, photo, duration }) => (
            <div
              key={title}
              className="playerList-playlist"
              onClick={() => handleClick(id, photo)}
            >
              <div className="playerList-album-title">
                <img alt="Album Poster" src={photo} />
                <div className="song-title">
                  <h3 className="text-semibold">{title}</h3>
                  <p>{artist}</p>
                </div>
              </div>
              <p>{duration}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
