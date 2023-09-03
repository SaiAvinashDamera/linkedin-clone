import React, { useState } from "react";
import "./Feed.css";
import { Avatar } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import EventIcon from "@mui/icons-material/Event";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";

import FeedOption from "./FeedOption";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);
  return (
    <div className="feed">
      <div className="feed__sharebox">
        <div className="feed__top">
          <Avatar
            className="feed__icon"
            src="https://i.seadn.io/gae/y2QcxTcchVVdUGZITQpr6z96TXYOV0p3ueLL_1kIPl7s-hHn3-nh8hamBDj0GAUNAndJ9_Yuo2OzYG5Nic_hNicPq37npZ93T5Nk-A?auto=format&dpr=1&w=1000"
          />
          <div className="feed__inputContainer">
            <p>Start a post</p>
          </div>
        </div>
        <div className="feed__bottom">
          <FeedOption Icon={InsertPhotoIcon} Title="Media" Color={"#378fe9"} />
          <FeedOption Icon={EventIcon} Title="Event" Color={"#c37d16"} />
          <FeedOption
            Icon={VerticalSplitIcon}
            Title="Write article"
            Color={"#e16745"}
          />
        </div>
      </div>

      <div className="feed__filter">
        <div className="feed__divider"></div>
        <div className="feed__sortby">
          <p>Sort by: Top</p>
        </div>
      </div>

      {/* Posts */}

      {posts.map((post) => (
        <Post
          name={"Name Here"}
          description={"Description here, this is description"}
          photoUrl={""}
          message={"Message here, this is the message"}
        />
      ))}
      <Post
        name={"Name Here"}
        description={"Description here, this is description"}
        photoUrl={""}
        message={"Message here, this is the message"}
      />
    </div>
  );
}

export default Feed;
