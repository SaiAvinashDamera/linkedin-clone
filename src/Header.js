import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SmsIcon from "@mui/icons-material/Sms";
import NotificationsIcon from "@mui/icons-material/Notifications";

import "./Header.css";
import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/userSlice";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div
      className="header"
      style={{ position: "sticky", boxShadow: "0px 0px 1px #0003" }}>
      <div className="headerContainer">
        <div className="header__left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
            alt=""
          />
          <div className="header__search">
            <SearchIcon className="search__icon" />
            <p>Search</p>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="header__right">
          <HeaderOption Icon={HomeIcon} Title={"Home"} />
          <HeaderOption Icon={SupervisorAccountIcon} Title={"My Network"} />
          <HeaderOption Icon={BusinessCenterIcon} Title={"Jobs"} />
          <HeaderOption Icon={SmsIcon} Title={"Messaging"} />
          <HeaderOption Icon={NotificationsIcon} Title={"Notifications"} />
          <HeaderOption
            onClick={logoutOfApp}
            avatar="https://i.seadn.io/gae/y2QcxTcchVVdUGZITQpr6z96TXYOV0p3ueLL_1kIPl7s-hHn3-nh8hamBDj0GAUNAndJ9_Yuo2OzYG5Nic_hNicPq37npZ93T5Nk-A?auto=format&dpr=1&w=1000"
            Title={"Me ▼"}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
