//Get the token from token.json in tokens folder (must be generated using genToken.js)
import tokenData from "../tokens/token.json";

//Search song from Spotify API
const useSongSearch = () => {
  async function searchSong(query, setSongs) {
    const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      query
    )}&type=track&limit=20`;
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${tokenData.token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const songs = [];
      data.tracks.items.map((song) => {
        songs.push({
          id: song.id,
          title: song.name,
          artist: song.artists[0].name,
          album: {
            title: song.album.name,
            coverURL: song.album.images[0].url,
          },
        });
      });

      console.log(songs);
      setSongs(songs);
    } catch (err) {
      console.error(err);
    }
  }

  return { searchSong };
};

export default useSongSearch;
