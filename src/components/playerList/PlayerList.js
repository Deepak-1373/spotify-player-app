import "./PlayerList.css";
import { useState, useEffect } from "react";

export const PlayerList = ({ musicData, handleClick }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData((prevData) => musicData.getSongs);
  }, [musicData]);

  const timeConvert = (num) => {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + ":" + minutes;
  };

  return (
    <div className="playerList">
      <div className="playerList-searchbar">
        <h2>For You</h2>
        <input type="text" placeholder="Search Song, Artist" />
      </div>

      <div className="song-list">
        {data &&
          data.map(({ title, artist, url, photo, duration }) => (
            <div
              key={title}
              className="playerList-playlist"
              onClick={() => handleClick(url, photo, title, artist)}
            >
              <div className="playerList-album-title">
                <img alt="Album Poster" src={photo} />
                <div className="song-title">
                  <h3 className="text-semibold">{title}</h3>
                  <p>{artist}</p>
                </div>
              </div>
              <p>{timeConvert(duration)}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
