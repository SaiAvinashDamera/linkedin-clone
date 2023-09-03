import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";

function HeaderOption({ avatar, Icon, Title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3 className="headerOption__title">{Title}</h3>
    </div>
  );
}

export default HeaderOption;