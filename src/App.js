import "./styles.css";
import { Sidebar, PlayerList, MusicPlayer } from "./components";
import { useState } from "react";
import { PLAYLIST_QUERY } from "./api/data";
import { useQuery } from "@apollo/client";
import { MutatingDots } from "react-loader-spinner";

export default function App() {
  const [posterData, setPosterData] = useState({
    url: "",
    title: "",
    artist: "",
    audioPath: "",
  });

  const { data, loading, error } = useQuery(PLAYLIST_QUERY, {
    variables: { playlistId: 1 },
  });
  if (loading)
    return (
      <div className="loading-spinner">
        <MutatingDots radius={15} />;
      </div>
    );
  if (error) return "Something bad happened";

  const handleClick = (url, path, title, artist) => {
    setPosterData((prevData) => ({
      ...prevData,
      url: path,
      title: title,
      artist: artist,
      audioPath: url,
    }));
  };
  return (
    <div className="app">
      <Sidebar categoriesData={data} />
      <PlayerList musicData={data} handleClick={handleClick} />
      <MusicPlayer data={posterData} />
    </div>
  );
}
