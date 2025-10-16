

async function getSpotifyToken() {
  const url = "https://accounts.spotify.com/api/token";

  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", process.env.SPOTIFY_CLIENT_ID);
  params.append("client_secret", process.env.SPOTIFY_CLIENT_SECRET);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log("Access Token:", data.access_token);
  return data.access_token;
}

const token = await getSpotifyToken();

//Save token to JSON file
import fs from "fs";
fs.writeFileSync("src/tokens/token.json", JSON.stringify({ token }, null, 2));
