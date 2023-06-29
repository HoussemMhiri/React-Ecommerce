import React from "react";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import { Dropdown } from "react-bootstrap";
import "./Heade.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
const Header = () => {
  const phone = "+001234567890";
  const disc = "Get 50% Off on Selected Items";
  const drop = [
    { title: "Eng", f: "French", s: "Arabic", th: "German" },
    { title: "Location", f: "Tunisia", s: "USA", th: "Germany" },
  ];

  const category = [
    {
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052dc39b839500c1f8a_Rectangle%201436.png",
      categName: "Furniture",
      desc: "240 Item Available",
    },
    {
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052f0ed215b864af96e_Rectangle%201436-1.png",
      categName: "Shoe",
      desc: "240 Item Available",
    },
    {
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052f3741a4f87af0f6d_Rectangle%201436-2.png",
      categName: "Laptop",
      desc: "240 Item Available",
    },
    {
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec605386e48004f02ee6a8_Rectangle%201436-4.png",
      categName: "Hand Bag",
      desc: "240 Item Available",
    },
    {
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6053e5b15cfafd550cbb_Rectangle%201436-3.png",
      categName: "Headphone",
      desc: "240 Item Available",
    },
    {
      imgUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec622235f3f730c0de8c3f_Rectangle%201436-5.png",
      categName: "Book",
      desc: "240 Item Available",
    },
  ];

  const rest = ["Deals", "What's New", "Delivery"];
  const last = [
    {
      imgUrl: <PersonOutlineIcon />,
      desc: "Account",
    },
    {
      imgUrl: <AddShoppingCartOutlinedIcon />,
      desc: "Cart",
    },
  ];

  return (
    <header>
      <div className="first-header">
        <div className="left-side">
          <LocalPhoneRoundedIcon />
          <span>{phone}</span>
        </div>
        <div className="center">
          <p>
            {disc} <span> Shop Now</span>
          </p>
        </div>
        <div className="right-side">
          {drop.map((el) => (
            <Dropdown>
              <Dropdown.Toggle
                style={{ fontSize: "13px", color: "white" }}
                variant="none"
                id="dropdown-basic"
              >
                {el.title}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">{el.f}</Dropdown.Item>
                <hr />
                <Dropdown.Item href="#/action-2">{el.s}</Dropdown.Item>
                <hr />
                <Dropdown.Item href="#/action-3">{el.th}</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ))}
        </div>
      </div>
      <div className="sec-header">
        <img
          src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"
          alt="shopCart"
        />
        <div className="categ-inp">
          <div className="category-rest">
            <Dropdown>
              <Dropdown.Toggle
                style={{ fontSize: 16, fontWeight: "500" }}
                variant="none"
                id="dropdown-basic"
              >
                Category
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ width: 784, height: 380 }}>
                <Dropdown.Item
                  href="#/action-1"
                  style={{ fontSize: 18, fontWeight: "600", textAlign: "left" }}
                >
                  Popular Categories
                </Dropdown.Item>
                <hr />
                <div className="categ-cont">
                  {category.map((el) => (
                    <Dropdown.Item href="#/action-2">
                      <div className="uno-cat-cont">
                        <img src={el.imgUrl} alt="logo" />
                        <div className="info-cont">
                          <p className="catgName">{el.categName}</p>
                          <p className="desc-p">{el.desc}</p>
                        </div>
                      </div>
                    </Dropdown.Item>
                  ))}
                </div>
              </Dropdown.Menu>
            </Dropdown>

            {rest.map((el) => (
              <span className="hover-grey">{el}</span>
            ))}
          </div>
          <div className="inp">
            <input type="text" name="" id="" placeholder="Search Product" />
            <div className="search-btn">
              <SearchOutlinedIcon />
            </div>
          </div>
        </div>
        <div className="last-side">
          {last.map((el) => (
            <p>
              {el.imgUrl} <span className="hover-orange">{el.desc}</span>
            </p>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
