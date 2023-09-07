import React from "react";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import NewspaperIcon from "@mui/icons-material/Newspaper";

import "./LoginHeader.css";
import "./Buttons.css";
import "./Header.css";
import HeaderOption from "./HeaderOption";

function LoginHeader() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" />
      </div>
      <div className="header__right">
        <HeaderOption Icon={NewspaperIcon} Title={"Articles"} />
        <HeaderOption Icon={SupervisorAccountIcon} Title={"People"} />
        <HeaderOption Icon={CastForEducationIcon} Title={"Learning"} />
        <HeaderOption Icon={BusinessCenterIcon} Title={"Jobs"} />
        <div className="iconDivider"></div>
        <div className="buttonTouchableOpacity" style={{ marginLeft: 10 }}>
          <p>Join now</p>
        </div>
        <div className="buttonColorBorder" style={{ marginLeft: 10 }}>
          <p>Sign in</p>
        </div>
      </div>
    </div>
  );
}

export default LoginHeader;
