import "./styles.css";
import { Sidebar, PlayerList, MusicPlayer } from "./components";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <PlayerList />
      <MusicPlayer />
    </div>
  );
}
