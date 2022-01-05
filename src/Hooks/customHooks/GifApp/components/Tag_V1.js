import axios from "axios";
import React, { useEffect, useState } from "react";

const API_KEY = "jJEny6rwhs1f8ziYO844parA5a59ZGyS";

const TagV1 = () => {
  const [gif, setGif] = useState("");
  const [tag, setTag] = useState("dogs");

  const fetchGifs = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);

    const imgSrc = data.data.images.downsized_large.url;
    setGif(imgSrc);
  };
  useEffect(() => {
    fetchGifs(tag);
  }, [tag]);

  const handleClick = () => {
    console.log("clicked");
    fetchGifs(tag);
  };
  return (
    <div className="container">
      <h1>Random {tag} Gifs </h1>
      <img width="500" src={gif} alt="gif" />
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>Click for new</button>
    </div>
  );
};

export default TagV1;
