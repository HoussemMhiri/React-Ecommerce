import React from "react";
import "./Service.css";

const ServiceChild = ({ servData }) => {
  return (
    <div className="serv-child-cont">
      <div className="child-cont-info">
        <h4>{servData.title}</h4>
        <p>{servData.parag}</p>
      </div>
      <img src={servData.imgUrl} alt="" />
    </div>
  );
};

export default ServiceChild;
