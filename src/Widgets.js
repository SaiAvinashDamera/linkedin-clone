import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import CircleIcon from "@mui/icons-material/Circle";

function Widgets() {
  const news = [
    { title: "Company X raises $400T", link: "", time: "1d ago" },
    {
      title: "Start a career somewhere",
      link: "",
      time: "3d ago",
    },
    {
      title: "#PAPA fam tutorials",
      link: "",
      time: "4d ago",
    },
    {
      title: "Let's eat some ramen",
      link: "",
      time: "6d ago",
    },
  ];

  const footer_links = [
    "About",
    "Accessibility",
    "Help Center",
    "Privacy & Terms",
    "Ad Choices",
    "Advertising",
    "Business Services",
    "Get the LinkedIn app",
    "More",
  ];
  return (
    <div className="widgets">
      <div className="news_widget">
        <div className="widgets__head">
          <p>LinkedIn News</p>
          <InfoIcon style={{ width: 14 }} />
        </div>
        <div className="widgets__body">
          {news.map((_new_) => (
            <div className="widgets__news">
              <div className="news__heading">
                <CircleIcon style={{ width: 6, marginInline: 10 }} />
                <p>{_new_.title}</p>
              </div>
              <p>{_new_.time}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="widgets__footer">
        <div className="footer__links">
          {footer_links.map((link) => (
            <p>{link}</p>
          ))}
        </div>
        <div className="footer__copyrights">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" />
          <p>LinkedIn Corporation © 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
