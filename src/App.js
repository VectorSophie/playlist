// src/App.js
import React, { useState } from "react";
import SearchBar from "./components/SearchBar"; 
import Playlist from "./components/Playlist";
import { fetchPlaylistVideos } from "./api/youtubeAPI";  

const App = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchPlaylistHandler = async (playlistId) => {
    const API_KEY = "AIzaSyASeaj-7Unu4Fb8n8_kufCAnJj5KGZi52I"; 
    setLoading(true);
    const fetchedVideos = await fetchPlaylistVideos(playlistId, API_KEY);
    setVideos(fetchedVideos);
    setLoading(false);
  };

  return (
    <div>
      <h1>YouTube Playlist App</h1>
      <SearchBar onSearch={fetchPlaylistHandler} />
      {loading ? <p>Loading...</p> : <Playlist videos={videos} />}
      <div className="flex justify-center mb-6">
      </div>
    </div>
  );
};

export default App;

