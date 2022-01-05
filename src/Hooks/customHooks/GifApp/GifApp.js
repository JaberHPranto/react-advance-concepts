import React from "react";
import RandomWithCustomHook from "./components/RandomWithCustomHook";
import TagWithCustomHook from "./components/TagWithCustomHook";
import "./gifStyle.css";

const GifApp = () => {
  return (
    <div>
      <h1>A Gif Application</h1>
      <div className="main-container">
        <RandomWithCustomHook />
        <TagWithCustomHook />
      </div>
    </div>
  );
};

export default GifApp;
