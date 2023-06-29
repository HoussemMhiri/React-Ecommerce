import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";

import BestDeals from "./components/bestDeals/BestDeals";
import Slides from "./components/slide/Slides";
import TopPrent from "./components/topCateg/TopPrent";
import Discount from "./components/discountBanner/Discount";
import ServiceParent from "./components/serviceHelp/ServiceParent";
import Bfooter from "./components/bfFooter/Bfooter";
import Footer from "./components/footer/Footer";

function App() {
  const cardInfo = [
    {
      title: "Furniture",
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png",
    },
    {
      title: "Hand Bag",
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png",
    },
    {
      title: "Books",
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc22b7ea53520_books-min.png",
    },
    {
      title: "Tech",
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e754ac2e32897cb53b_tech-min.png",
    },
    {
      title: "Sneakers",
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64b769118272f244f_sneakers-min.png",
    },
    {
      title: "Travel",
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad6d07e7568f_travel-min.png",
    },
  ];

  const cardDeals = [
    {
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e68b497e229146b818_leptop%20sleeve-min.png",
      like: "fas fa-heart",
      title: "Laptop sleeve MacBook",
      price: "$59",
      desc: "Organic Cotton, fairtrade certified",
      stars:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg",
      rate: "(121)",
      btn: "Add to Cart",
    },
    {
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png",
      like: "fas fa-heart",
      title: "AirPods Max",
      price: "$559",
      desc: "A perfect balance of high-fidelity audio",
      stars:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg",
      rate: "(121)",
      btn: "Add to Cart",
    },
    {
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55cc9361a8ecce6d4_flower%20leptop%20sleeve-min.png",
      like: "fas fa-heart",
      title: "Flower Laptop Sleeve",
      price: "$39",
      desc: "15 in. x 10 in. -Flap top closure",
      stars:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg",
      rate: "(121)",
      btn: "Add to Cart",
    },
    {
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e78b497e3a5646b82f_water%20pot-min.png",
      like: "fas fa-heart",
      title: "Supreme Water Bottle",
      price: "$19",
      desc: "Table with air purifier, stained veneer/black",
      stars:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg",
      rate: "(121)",
      btn: "Add to Cart",
    },
    {
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5560c31bbfce_leptop%20sleeve%20macbook-min.png",
      like: "fas fa-heart",
      title: "Laptop sleeve MacBook",
      price: "$59",
      desc: "Organic Cotton, fairtrade certified",
      stars:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg",
      rate: "(121)",
      btn: "Add to Cart",
    },
    {
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e61eb4ad4af6e75689_macbook%2013-min.png",
      like: "fas fa-heart",
      title: "Macbook pro 13",
      price: "$1099",
      desc: "256, 8 core GPU, 8 GB",
      stars:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg",
      rate: "(121)",
      btn: "Add to Cart",
    },
    {
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5507951bbfbe_homepad-mini-min.png",
      like: "fas fa-heart",
      title: "HomePod mini",
      price: "$59",
      desc: "5 Colors Available",
      stars:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg",
      rate: "(121)",
      btn: "Add to Cart",
    },
    {
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64bd907adafd35b46_ipad%20mini-min.png",
      like: "fas fa-heart",
      title: "Ipad Mini",
      price: "$539",
      desc: "Table with air purifier, stained veneer/black",
      stars:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg",
      rate: "(121)",
      btn: "Add to Cart",
    },
  ];

  const serv = [
    {
      title: "Frequently Asked Questions",
      parag: "Updates on safe Shopping in our Stores",
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55b939fea169c0292_faq-min.png",
    },
    {
      title: "Online Payment Process",
      parag: "Updates on safe Shopping in our Stores",
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6707380718425e697_onlie%20payment-min.png",
    },
    {
      title: "Home Delivery Options",
      parag: "Updates on safe Shopping in our Stores",
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e544663ba3d0fd2bb8_home%20delivery-min.png",
    },
  ];

  return (
    <div className="App">
      <Header />
      <Slides />
      <TopPrent infoCards={cardInfo} />
      <BestDeals cardDeals={cardDeals} />
      <Discount h2="Get 5% Cash Back" p="on Shopcart.com" bttn="Learn More" />
      <ServiceParent service={serv} />
      <hr style={{ width: 1280, margin: "0 auto" }} />
      <Bfooter />
      <hr style={{ width: 1280, margin: "0 auto" }} />
      <Footer />
    </div>
  );
}

export default App;
