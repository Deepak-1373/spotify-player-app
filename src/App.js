import "./styles.css";
import { Sidebar, PlayerList, MusicPlayer } from "./components";
import { useQuery, gql } from "@apollo/client";

const PLAYLIST_QUERY = gql`
  query ExampleQuery($playlistId: Int!) {
    getSongs(playlistId: $playlistId) {
      _id
      title
      photo
      url
      duration
      artist
    }
  }
`;

export default function App() {
  const { data, loading, error } = useQuery(PLAYLIST_QUERY, {
    variables: { playlistId: 1 },
  });
  if (loading) return "Loading...";
  if (error) return "Something bad happened";
  return (
    <div className="app">
      <Sidebar />
      <PlayerList musicData={data} />
      <MusicPlayer />
    </div>
  );
}
