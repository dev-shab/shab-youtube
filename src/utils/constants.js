export const YOUTUBE_MOVIES_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  process.env.REACT_APP_YT_API_KEY;

export const YOUTUBE_SUGGESTIONS_API =
  "https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=";

export const OFFSET_LIVE_CHAT = 100;
