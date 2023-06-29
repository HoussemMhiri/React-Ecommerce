import React from "react";
import "./Discounts.css";

const Discount = ({ h2, p, bttn }) => {
  return (
    <section className="section">
      <div className="info-disc-cont">
        <div className="info-disc">
          <h2>{h2}</h2>
          <p>{p}</p>
          <button>{bttn}</button>
        </div>
        <img
          style={{ width: 250, height: 220 }}
          src="https://pngimg.com/d/credit_card_PNG231.png"
          border="0"
          alt="Screenshot-3095"
        />
      </div>
    </section>
  );
};

export default Discount;
