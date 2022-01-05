import React from "react";
import useGif from "../useGif";

const RandomWithCustomHook = () => {
  const { gif, fetchGifs } = useGif();
  return (
    <div className="container">
      <h1>Random Gifs </h1>
      <img width="500" src={gif} alt="gif" />
      <button onClick={fetchGifs}>Click for new</button>
    </div>
  );
};

export default RandomWithCustomHook;
