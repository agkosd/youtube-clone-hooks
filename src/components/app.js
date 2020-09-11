import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [results, resultSetter] = useVideos("");
  useEffect(() => {
    setSelectedVideo(results[0]);
  },[results]);

  return (
    <div className="ui container">
      <SearchBar setResults={resultSetter} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList results={results} onClick={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
