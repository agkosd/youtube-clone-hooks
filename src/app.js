import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const App = () => {
  const [results, setResults] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const resultSetter = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setResults(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const clicked = (t) => {
    setSelectedVideo(t);
  };

  useEffect(() => {
    resultSetter("");
  }, []);

  return (
    <div className="ui container">
      <SearchBar setResults={resultSetter} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList results={results} onClick={clicked} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
