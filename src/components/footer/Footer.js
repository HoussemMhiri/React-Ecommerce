import React from "react";
import "./Foot.css";

const Footer = () => {
  const svgs = [
    {
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb0ed6e927bdf5bc4309e0_briefcase.svg",
      par: "Become Seller",
    },
    {
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb0ed6c4510c256356f4cd_gift.svg",
      par: "Gift Cards",
    },
    {
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb0ed6ae57fd74e0402aa4_help-circle.svg",
      par: "Help Canter",
    },
  ];

  const secFooter = ["Terms of Service", "Privacy & Policy"];
  return (
    <footer>
      <div className="first-foot">
        {svgs.map((el) => (
          <div className="left-cont">
            <img src={el.imgUrl} alt="logo" />
            <span>{el.par}</span>
          </div>
        ))}
      </div>
      <div className="sec-foot">
        {secFooter.map((el) => (
          <p>{el}</p>
        ))}
      </div>
      <div className="third-foot">
        <p>All Right reserved by H.M | 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
