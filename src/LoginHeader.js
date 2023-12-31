import React from "react";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import "./LoginHeader.css";
import "./Buttons.css";
import "./Header.css";
import HeaderOption from "./HeaderOption";

function LoginHeader() {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="header__left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" />
        </div>
        <div className="header__right">
          <HeaderOption
            className="header__icon"
            Icon={TrendingUpIcon}
            Title={"Trending"}
          />
          <HeaderOption
            className="header__icon"
            Icon={NewspaperIcon}
            Title={"Articles"}
          />
          <HeaderOption
            className="header__icon"
            Icon={SupervisorAccountIcon}
            Title={"People"}
          />
          <HeaderOption
            className="header__icon"
            Icon={CastForEducationIcon}
            Title={"Learning"}
          />
          <HeaderOption
            className="header__icon"
            Icon={BusinessCenterIcon}
            Title={"Jobs"}
          />
          <div className="iconDivider"></div>
          <div className="buttonTouchableOpacity" style={{ marginLeft: 10 }}>
            <p>Join now</p>
          </div>
          <div className="buttonColorBorder" style={{ marginLeft: 10 }}>
            <p>Sign in</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginHeader;
