import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    resultSetter(defaultSearchTerm);
  }, [defaultSearchTerm]);
  const resultSetter = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setResults(response.data.items);
  };

  return [results, resultSetter];
};

export default useVideos;
