import React from "react";

const Playlist = ({ videos }) => {
  return (
    <div>
      {videos.map((video) => (
        <div key={video.id.videoId}>
          <h3>{video.snippet.title}</h3>
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
          <p>{video.snippet.description.slice(0,250)}</p>
        </div>
      ))}
    </div>
  );
};

export default Playlist;

