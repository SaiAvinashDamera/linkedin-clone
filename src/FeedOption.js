import React from "react";
import "./FeedOption.css";

function FeedOption({ Icon, Title, Color }) {
  return (
    <div className="feedOption">
      {Icon && <Icon className="feedOption__icon" style={{ color: Color }} />}
      <p>{Title}</p>
    </div>
  );
}

export default FeedOption;
