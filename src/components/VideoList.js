import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ results, onClick }) => {
  

  const renderedItems = results.map((result) => {
    return (
      <VideoItem
        result={result}
        key={result.id.videoId}
        onClick={onClick}
      />
    );
  });
  return <div className="ui list">{renderedItems}</div>;
};

export default VideoList;
