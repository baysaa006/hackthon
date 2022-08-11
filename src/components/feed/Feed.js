import React from "react";
import "./feed.css";
import Content from "./content";
const Feed = () => {
  return (
    <div className="feed">
      <div className="text-option mt-5 ">
        <h2>Top Collectibles</h2>
        <h2>View All</h2>
      </div>

      <Content />
    </div>
  );
};

export default Feed;
