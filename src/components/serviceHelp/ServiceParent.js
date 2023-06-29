import React from "react";
import "./Service.css";
import ServiceChild from "./ServiceChild";

const ServiceParent = ({ service }) => {
  return (
    <section className="all-serv-cont">
      <h2>Services To Help You Shop</h2>
      <div className="serv-card-cont">
        {service.map((el) => (
          <ServiceChild servData={el} />
        ))}
      </div>
    </section>
  );
};

export default ServiceParent;
