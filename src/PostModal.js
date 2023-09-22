import React, { useState } from "react";
import "./PostModal.css";
import "./Buttons.css";
import { Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import firebase from "firebase/compat/app";
import { selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { postArticleAPI } from "./app/actions/actions";
import Editor from "./Editor";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PostModal = (props) => {
  const user = useSelector(selectUser);
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      console.log(`not an image, the file is a ${typeof image}`);
      return;
    }

    setShareImage(image);
  };

  const postArticle = (e) => {
    e.preventDefault();

    if (e.target !== e.currentTarget) {
      return;
    }

    const payload = {
      image: shareImage,
      user: user,
      message: editorText,
      timestamp: firebase.firestore.Timestamp.now(),
    };
    postArticleAPI(payload);
    reset(e);
  };

  const reset = (e) => {
    setEditorText("");
    setShareImage("");
    props.handleClick(e);
  };

  return (
    <>
      {props.showModal === "open" && (
        <div className="postmodal">
          <div className="postmodal__content">
            <div className="postmodal__header">
              <div className="pmheader__left">
                <Avatar
                  src="https://i.seadn.io/gae/y2QcxTcchVVdUGZITQpr6z96TXYOV0p3ueLL_1kIPl7s-hHn3-nh8hamBDj0GAUNAndJ9_Yuo2OzYG5Nic_hNicPq37npZ93T5Nk-A?auto=format&dpr=1&w=1000"
                  style={{ width: 50, height: 50 }}
                />
                <div className="pmheader__info">
                  <h3>{user.displayName}</h3>
                  <p>Post to Anyone</p>
                </div>
              </div>
              <div
                onClick={(event) => {
                  reset(event);
                }}
                className="pmheader__right">
                <CloseIcon
                  style={{
                    width: 30,
                    height: 30,
                    color: "#555",
                  }}
                />
              </div>
            </div>
            <div className="postmodal__body">
              <div className="pmbody__textarea">
                <ReactQuill
                  value={editorText}
                  onChange={setEditorText}
                  placeholder={"What do you want to talk about?"}
                />
              </div>

              {/* <Editor /> */}
              {/* <textarea
                value={editorText}
                onChange={(e) => setEditorText(e.target.value)}
                placeholder="What do you want to talk about?"
                autoFocus={true}
              /> */}
              <div className="pmbody__uploadimage">
                {shareImage && <img src={URL.createObjectURL(shareImage)} />}
              </div>
              <div className="pmbody__buttons">
                <input
                  onChange={handleChange}
                  type="file"
                  accept="image/gif, image/jpeg, image/png, image/jpg"
                  name="image"
                  id="uploadImg"
                  style={{ display: "none" }}
                />
                <label htmlFor="uploadImg" className="pmbody__button">
                  <div className="pmbody__alt">Add media</div>
                  <CropOriginalIcon
                    style={{
                      width: 25,
                      height: 25,
                      color: "#555",
                    }}
                  />
                </label>
                <div className="pmbody__button">
                  <div className="pmbody__alt">Create an event</div>
                  <CalendarMonthIcon
                    style={{
                      width: 25,
                      height: 25,
                      color: "#555",
                    }}
                  />
                </div>
                <div className="pmbody__button">
                  <div className="pmbody__alt">Celebrate an occasion</div>
                  <AutoAwesomeIcon
                    style={{
                      width: 25,
                      height: 25,
                      color: "#555",
                    }}
                  />
                </div>
                <div className="pmbody__button">
                  <div className="pmbody__alt">More</div>
                  <MoreHorizIcon
                    style={{
                      width: 25,
                      height: 25,
                      color: "#555",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="feed__divider" />
            <div className="postmodal__submit">
              <button
                disabled={!editorText ? true : false}
                onClick={(event) => postArticle(event)}
                className="pmsubmit__button buttonSolid">
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostModal;
