import React from "react";
import "./Top.css";

const TopChild = ({ data }) => {
  return (
    <div class="card">
      <div class="card-details">
        <p class="text-title">{data.title}</p>
        <img src={data.imgUrl} alt="" />
      </div>
      <button class="card-button">More info</button>
    </div>
  );
};

export default TopChild;
