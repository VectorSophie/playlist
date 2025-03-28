import axios from "axios";

export const fetchPlaylistVideos = async (playlistId, API_KEY) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${API_KEY}`;
  
  try {
    const response = await axios.get(URL);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching playlist videos:", error);
    return [];
  }
};