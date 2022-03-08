import "./Sidebar.css";
import Vector from "../../utility-images/Vector.png";
import Profile from "../../utility-images/Profile.svg";
import { useState } from "react";
import { Hamburger } from "./Hamburger";

export const Sidebar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen((prev) => !prev);
  };

  return (
    <div className="sidebar">
      <img src={Vector} alt="Spotify logo" className="sidebar-spotify-logo" />
      <div
        className={`sidebar-list ${
          hamburgerOpen ? "sidebar-list-mobile-view" : ""
        }`}
      >
        <ul className={!hamburgerOpen ? "sidebar-list-elements" : "hide-menu"}>
          <li className="sidebar-list-element active">For You</li>
          <li className="sidebar-list-element">Top Tracks</li>
          <li className="sidebar-list-element">Favourites</li>
          <li className="sidebar-list-element">Recently Played</li>
        </ul>
        <button onClick={() => setHamburgerOpen(false)}>x</button>
      </div>
      <div className="hamburger-menu" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
      <img src={Profile} alt="Profile" className="sidebar-profile-logo" />
    </div>
  );
};
