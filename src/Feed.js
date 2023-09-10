import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Avatar } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import EventIcon from "@mui/icons-material/Event";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";

import FeedOption from "./FeedOption";
import Post from "./Post";
import { db, auth } from "./firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__sharebox">
        <div className="feed__top">
          <Avatar
            className="feed__icon"
            src="https://i.seadn.io/gae/y2QcxTcchVVdUGZITQpr6z96TXYOV0p3ueLL_1kIPl7s-hHn3-nh8hamBDj0GAUNAndJ9_Yuo2OzYG5Nic_hNicPq37npZ93T5Nk-A?auto=format&dpr=1&w=1000"
          />
          <div className="feed__inputContainer">
            <div className="feed__input">
              <form>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Start a post"
                />
                <button onClick={sendPost} type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="feed__bottom">
          <FeedOption Icon={InsertPhotoIcon} Title="Media" Color={"#378fea"} />
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

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          photoUrl={photoUrl}
          message={message}
        />
      ))}
    </div>
  );
}

export default Feed;
