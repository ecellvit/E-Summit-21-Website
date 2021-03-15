import React from "react";
import "./EventCard.css";

function EventCard(props) {

  return (
    <div className="list-item">
      <div className="list-title">{props.listTitle}</div>
      <div className={`list-text  ${props.head}`}>
        <h1>{props.head}</h1>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default EventCard;
