import React from "react";
import "./BestDeal.css";

const BdChild = ({ dData }) => {
  const likeChange = (e) =>
    e.target.style.color !== "red"
      ? (e.target.style.color = "red")
      : (e.target.style.color = "");
  return (
    <div className="card-deal-cont">
      <img className="img" src={dData.imgUrl} alt="logo" />
      <button onClick={(e) => likeChange(e)} class="likes">
        <i className={dData.like}></i>
      </button>
      <div className="card-deal-info">
        <p className="titles">
          {dData.title} <span className="price">{dData.price}</span>
        </p>
        <p className="prod-desc">{dData.desc}</p>
        <div className="stars">
          <img src={dData.stars} alt="star" />
          <img src={dData.stars} alt="star" />
          <img src={dData.stars} alt="star" />
          <img src={dData.stars} alt="star" />
          <img src={dData.stars} alt="star" />
          <span>{dData.rate}</span>
        </div>
        <button className="add">{dData.btn}</button>
      </div>
    </div>
  );
};

export default BdChild;
