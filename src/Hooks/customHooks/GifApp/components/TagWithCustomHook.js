import React, { useState } from "react";
import useGif from "../useGif";

const TagWithCustomHook = () => {
  const [tag, setTag] = useState("dogs");
  const { gif, fetchGifs } = useGif(tag);
  return (
    <div className="container">
      <h1>Random {tag} Gifs </h1>
      <img width="500" src={gif} alt="gif" />
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => fetchGifs(tag)}>Click for new</button>
    </div>
  );
};

export default TagWithCustomHook;
