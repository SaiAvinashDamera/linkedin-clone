import React from "react";
import "./LinksSection.css";

function LinksSection({ links }) {
  return (
    <div>
      {links.map((data) => (
        <h3>{data.id}</h3>
      ))}
    </div>
  );
}

export default LinksSection;
