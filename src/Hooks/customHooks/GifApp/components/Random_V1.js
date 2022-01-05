import axios from "axios";
import React, { useEffect, useState } from "react";

const API_KEY = "jJEny6rwhs1f8ziYO844parA5a59ZGyS";

const RandomV1 = () => {
  const [gif, setGif] = useState("");
  const fetchGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);

    const imgSrc = data.data.images.downsized_large.url;
    setGif(imgSrc);
  };
  useEffect(() => {
    fetchGifs();
  }, []);

  const handleClick = () => {
    console.log("clicked");
    fetchGifs();
  };
  return (
    <div className="container">
      <h1>Random</h1>
      <img width="500" src={gif} alt="gif" />
      <button onClick={handleClick}>Click for new</button>
    </div>
  );
};

export default RandomV1;
