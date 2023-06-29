import React from "react";
import "./Top.css";
import TopChild from "./TopChild";

const TopPrent = ({ infoCards }) => {
  const h2 = "Shop Our Top Categories";
  return (
    <section className="all-cont">
      <h2>{h2}</h2>
      <div className="cards-cont">
        {infoCards.map((el) => (
          <TopChild data={el} />
        ))}
      </div>
    </section>
  );
};

export default TopPrent;
