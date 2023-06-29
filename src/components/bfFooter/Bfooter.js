import React from "react";
import "./Bfoot.css";

const Bfooter = () => {
  const img =
    "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg";
  const pa =
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit";
  const pay = [
    "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8816711ebecac46d8_stripe.png",
    "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce82d440b7ab84a993f_visa.png",
    "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8f032504012a5896b_Mastercard.png",
    "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e48b497e6ce846b7ff_Amazon.png",
    "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1f054e419e42aca4a9a2_Klarna.png",
    "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce7c4510cf9a55828a0_PayPal.png",
    "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4707380264b25e680_ApplePay.png",
    "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1f55dc68c5ee83d0cbf8_GooglePay.png",
  ];
  const dep = [
    {
      title: "Department",
      more: [
        "Fashion",
        "Education Product",
        "Frozen Food",
        "Beverages",
        "Organic Grocery",
        "Office Supplies",
        "Beauty Product",
        "Books",
        "Electronics & Gadget",
        "Travel Accessories",
        "Fitness",
        "Sneakers",
        "Toys",
        "Furniture",
      ],
    },
    {
      title: "About Us",
      more: [
        "About Shopcart",
        "Careers",
        "News & Blog",
        "Help",
        "Press Center",
        "Shop By Location",
        "Shopcart Brands",
        "Affiliate & Partners",
        "Ideas & Guides",
      ],
    },
    {
      title: "Services",
      more: [
        "Gift Card",
        "Mobile App",
        "Shipping & Delivery",
        "Order Pickup",
        "Account Signup",
      ],
    },
    {
      title: "Help",
      more: [
        "Shopcart Help",
        "Returns",
        "Track Orders",
        "Contact Us",
        "Feedback",
        "Security & Fraud",
      ],
    },
  ];
  return (
    <section className="bfF-cont">
      <div className="first-bf-cont">
        <img src={img} alt="logo" />
        <p>{pa}</p>
        <h5>Accepted Payments</h5>
        <div className="grid-cont">
          {pay.map((el) => (
            <div className="pay-cont">
              <img src={el} alt="logo" />
            </div>
          ))}
        </div>
      </div>
      <div className="sec-bf-cont">
        {dep.map((el) => (
          <div className="dep-cont">
            <h6 className="dep-title">{el.title}</h6>
            <div className="dep-info">
              {el.more.map((el) => (
                <p>{el}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bfooter;
