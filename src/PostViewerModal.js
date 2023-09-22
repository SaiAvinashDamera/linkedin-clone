import React from "react";
import "./PostViewerModal.css";
import { Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function PostViewerModal(props) {
  const reset = (e) => {
    props.handleClick(e);
  };

  return (
    <>
      {props.showViewerModal === "open" && (
        <div className="postviewer">
          <div className="postviewer__content">
            <div className="postviewer__left">
              <img src={props.photoUrl} />
            </div>
            <div className="postviewer__right">
              <div className="postviewer__header">
                <div className="pvheader__left">
                  <Avatar
                    src="https://i.seadn.io/gae/y2QcxTcchVVdUGZITQpr6z96TXYOV0p3ueLL_1kIPl7s-hHn3-nh8hamBDj0GAUNAndJ9_Yuo2OzYG5Nic_hNicPq37npZ93T5Nk-A?auto=format&dpr=1&w=1000"
                    style={{ width: 50, height: 50 }}
                  />
                  <div className="pvheader__info">
                    <h3>{props.name}</h3>
                    <p>Post to Anyone</p>
                  </div>
                </div>
                <div
                  onClick={(event) => {
                    reset(event);
                  }}
                  className="pvheader__right">
                  <CloseIcon
                    style={{
                      width: 25,
                      height: 25,
                      color: "#555",
                    }}
                  />
                </div>
              </div>
              <div className="postviewer__body">
                <div
                  style={{ fontSize: 14, fontWeight: 400 }}
                  dangerouslySetInnerHTML={{ __html: props.message }}
                />
                {/* <div className="message">{props.message}</div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PostViewerModal;
