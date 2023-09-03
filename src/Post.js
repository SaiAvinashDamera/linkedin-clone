import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import SendIcon from "@mui/icons-material/Send";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import FeedOption from "./FeedOption";

function Post({ name, description, photoUrl, message }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src="https://i.seadn.io/gae/y2QcxTcchVVdUGZITQpr6z96TXYOV0p3ueLL_1kIPl7s-hHn3-nh8hamBDj0GAUNAndJ9_Yuo2OzYG5Nic_hNicPq37npZ93T5Nk-A?auto=format&dpr=1&w=1000" />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="__divider"></div>

      <div className="post__buttons">
        <FeedOption Title={"Like"} Icon={ThumbUpOffAltIcon} Color={"gray"} />
        <FeedOption
          Title={"Comment"}
          Icon={ChatBubbleOutlineIcon}
          Color={"gray"}
        />
        <FeedOption Title={"Repost"} Icon={RepeatIcon} Color={"gray"} />
        <FeedOption Title={"Send"} Icon={SendIcon} Color={"gray"} />
      </div>
    </div>
  );
}

export default Post;
