import "./styles.css";
import { Sidebar, PlayerList, MusicPlayer } from "./components";
import { useState } from "react";
import { PLAYLIST_QUERY } from "./api/data";
import { useQuery } from "@apollo/client";

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
  if (loading) return "Loading...";
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
      <Sidebar />
      <PlayerList musicData={data} handleClick={handleClick} />
      <MusicPlayer data={posterData} />
    </div>
  );
}
