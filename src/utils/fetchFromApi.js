import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const apiKey = import.meta.env.VITE_RAPID_API_KEY;

export const fetchFromApi = async (
  fetchingVideos,
  url,
  id,
  fetchingChannelVideos,
  userSearching,
  searchTerm,
  setData
) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/${url}`,
    params:
      url !== "search"
        ? { part: "snippet, statistics", id: id }
        : url === "search" && id !== null && fetchingChannelVideos
        ? {
            channelId: id,
            part: "snippet,id",
            order: "date",
            maxResults: "50",
          }
        : url === "search" && id !== null && !fetchingChannelVideos
        ? {
            relatedToVideoId: id,
            part: "id,snippet",
            type: "video",
            maxResults: "50",
          }
        : url === "search" && id === null && userSearching
        ? {
            q: searchTerm,
            part: "snippet,id",
            maxResults: "50",
            order: "date",
          }
        : {
            q: searchTerm,
            part: "snippet,id",
            maxResults: "50",
          },

    headers: {
      "X-RapidAPI-Key": "9e3427baa1msh167351786065e72p142c5bjsnd061d2d69adf",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  axios
    .request(options)
    .then(function (response) {
      fetchingVideos
        ? setData(response.data.items)
        : setData(response.data.items[0]);
    })
    .catch(function (error) {
      console.error(error);
    });
};
