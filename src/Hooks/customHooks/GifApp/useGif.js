import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = "jJEny6rwhs1f8ziYO844parA5a59ZGyS";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");

  const fetchGifs = async (tag) => {
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);

    const imgSrc = data.data.images.downsized_large.url;
    setGif(imgSrc);
  };

  useEffect(() => {
    fetchGifs(tag);
  }, [tag]);

  return { gif, fetchGifs };
};

export default useGif;
