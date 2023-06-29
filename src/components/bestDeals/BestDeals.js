import React from "react";
import "./BestDeal.css";
import BdChild from "./BdChild";

const BestDeals = ({ cardDeals }) => {
  const titleH2 = "Todays Best Deals For You!";
  const btns = [
    "Gadgets",
    "Fashion",
    "Toys",
    "Eductaion",
    "Beauty",
    "Fitness",
    "Furniture",
    "Sneakers",
  ];

  return (
    <section className="section-cont">
      <h2>{titleH2}</h2>
      <div className="btnss">
        {btns.map((el) => (
          <button className="butn">{el}</button>
        ))}
      </div>
      <div className="deals-cont">
        {cardDeals.map((el) => (
          <BdChild dData={el} />
        ))}
      </div>
    </section>
  );
};

export default BestDeals;
