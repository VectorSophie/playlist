// src/components/SearchBar.js
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [url, setUrl] = useState("");

  const extractPlaylistId = (url) => {
    const regex = /list=([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const playlistId = extractPlaylistId(url);
    if (playlistId) {
      onSearch(playlistId);
    } else {
      alert("Invalid playlist URL");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter YouTube Playlist URL"
      />
      <button type="submit">Load Playlist</button>
    </form>
  );
};

export default SearchBar;
