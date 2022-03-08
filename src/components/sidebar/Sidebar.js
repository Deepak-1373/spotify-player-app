import "./Sidebar.css";
import Vector from "../../utility-images/Vector.png";
import Profile from "../../utility-images/Profile.svg";
import { useState, useEffect } from "react";
import { Hamburger } from "./Hamburger";

export const Sidebar = ({ categoriesData }) => {
  const [data, setData] = useState([]);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  useEffect(() => {
    setData((prev) => categoriesData.getPlaylists);
  }, [categoriesData]);

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
          {data &&
            data.map(({ id, title }) => (
              <li
                key={id}
                className={
                  id === 1
                    ? "sidebar-list-element active"
                    : "sidebar-list-element"
                }
              >
                {title}
              </li>
            ))}
        </ul>
        <button
          className="sidebar-button-mobile-view"
          onClick={() => setHamburgerOpen(false)}
        >
          X
        </button>
      </div>
      <div className="hamburger-menu" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
      <img src={Profile} alt="Profile" className="sidebar-profile-logo" />
    </div>
  );
};
