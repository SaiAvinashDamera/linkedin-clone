import React from "react";
import "./LinksSection.css";

function LinksSection({ links }) {
  return (
    <div className="links__section">
      {links.map((data) => {
        return (
          <div className="section__col">
            <h4>{data.id}</h4>

            {data.links.map((link) => {
              return <p>{link}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default LinksSection;
