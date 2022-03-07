import "./Sidebar.css";
import Vector from "../../utility-images/Vector.png";
import Profile from "../../utility-images/Profile.svg";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={Vector} alt="Spotify logo" className="sidebar-spotify-logo" />
      <div className="sidebar-list">
        <ul className="sidebar-list-elements">
          <li className="sidebar-list-element active">For You</li>
          <li className="sidebar-list-element">Top Tracks</li>
          <li className="sidebar-list-element">Favourites</li>
          <li className="sidebar-list-element">Recently Played</li>
        </ul>
      </div>
      <img src={Profile} alt="Profile" className="sidebar-profile-logo" />
    </div>
  );
};
