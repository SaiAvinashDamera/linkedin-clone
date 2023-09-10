import { Avatar } from "@mui/material";
import React from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import TagIcon from "@mui/icons-material/Tag";

import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <TagIcon className="recentItem__hash" />
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
          alt=""
        />
        <Avatar
          className="sidebar__avatar"
          src="https://i.seadn.io/gae/y2QcxTcchVVdUGZITQpr6z96TXYOV0p3ueLL_1kIPl7s-hHn3-nh8hamBDj0GAUNAndJ9_Yuo2OzYG5Nic_hNicPq37npZ93T5Nk-A?auto=format&dpr=1&w=1000"
        />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who's viewed your profile</p>
          <p className="sidebar__statNumber">2,345</p>
        </div>
        <div className="sidebar__stat">
          <p>Impressions of your post</p>
          <p className="sidebar__statNumber">6,789</p>
        </div>
      </div>
      <div className="sidebar__myitems">
        <BookmarkIcon className="sidebar__myitemsIcon" />
        <p>My items</p>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__recentItems">
          <p>Recent</p>
          <div className="sidebar__recentItemsList">
            {recentItem("reactjs")}
            {recentItem("JavaScript")}
            {recentItem("India")}
            {recentItem("Python")}
            {recentItem("Papafam")}
          </div>
        </div>
        <div className="discover__more">
          <p>Discover more</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
