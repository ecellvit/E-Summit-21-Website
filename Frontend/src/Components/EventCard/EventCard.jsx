import React, { useState } from "react";
import "./EventCard.css";

function EventCard(props) {
  const [cls, setClass] = useState("expanded");

  return (
    <div className="list-item">
      {/* <div className="list-title">{props.listTitle}</div> */}
      <div
        className={`list-text ${
          props.head.indexOf(" ") !== -1
            ? props.head.substr(0, props.head.indexOf(" "))
            : props.head
        }`}
      >
        <div className="list-text-inner">
          <div className="grid">
            <h1>{props.head}</h1>
            <div className="img"></div>
          </div>
          <p className={cls}>
            <span>{props.content.substr(0, 100)}</span>
            <span className="readmore" onClick={() => setClass("expanded")}>
              {" "}
              ...Read More&gt;
            </span>
            <span className="extra">{props.content.substr(100)}</span>
            {/* <span className="readless" onClick={() => setClass("")}>
              &lt;Read Less
            </span> */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
