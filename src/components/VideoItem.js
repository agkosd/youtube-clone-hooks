import React from "react";
import "./style.css";

const VideoItem = ({ result, onClick }) => {
  return (
    <div
      className="item video-item"
      onClick={() => {
        onClick(result);
      }}
    >
      <img
        className="ui image"
        alt={result.snippet.title}
        src={result.snippet.thumbnails.high.url}
      />
      <div className="content">
        <div className="header">{result.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
