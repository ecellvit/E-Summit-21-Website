import React from "react";
import "./EventCard.css";

function EventCard(props) {
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
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
