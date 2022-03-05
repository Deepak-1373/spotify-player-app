import "./Sidebar.css";
import Vector from "../sidebar/Vector.png";
import Profile from "../sidebar/Profile.svg";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={Vector} alt="Spotify logo" className="sidebar-spotify-logo" />
      <div className="sidebar-list">
        <ul className="sidebar-listElements">
          <li className="sidebar-listElement active">For You</li>
          <li className="sidebar-listElement">Top Tracks</li>
          <li className="sidebar-listElement">Favourites</li>
          <li className="sidebar-listElement">Recently Played</li>
        </ul>
      </div>
      <img src={Profile} alt="Profile" className="sidebar-profile-logo" />
    </div>
  );
};
