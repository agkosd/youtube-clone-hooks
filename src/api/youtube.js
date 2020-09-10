import axios from "axios";

const KEY = "AIzaSyCczOC8c7U0U2THsbF7CvKVmZBw8Q7OvG4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
    q: "surfing",
  },
});
