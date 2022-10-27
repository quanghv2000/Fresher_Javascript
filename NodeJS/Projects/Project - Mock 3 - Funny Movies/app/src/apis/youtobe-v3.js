import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: 'AIzaSyAAMb1sX8Bl5V-DrrGTAKuMbQt0b1W0xHk'
  },
  headers: {}
});