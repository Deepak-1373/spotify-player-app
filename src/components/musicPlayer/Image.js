import React from "react";
import "./MusicPlayer.css";

export const Image = ({ path, alt, imageSize, image }) => {
  return (
    <div
      className={image === "image-vector" ? "image-vector" : "image-container"}
    >
      <img
        src={path}
        alt={alt}
        className={imageSize === "image-small" ? "image-small" : "image-play"}
      />
    </div>
  );
};
