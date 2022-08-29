import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <p className="status">{props.status}</p>
      <img
        className="main-img"
        src={props.image}
        alt="1"
        width="300px"
        height="400px"
      />
      <div className="ratings">
        <img
          className="star-icon"
          src={props.star}
          alt="2"
          width="15px"
          height="13px"
        />
        <span>{props.rating}</span> &nbsp;
        <span>{props.reviewCount} &#9679; USA</span>
      </div>

      <p>{props.title}</p>
      <p className="cost">
        {props.cost}
        <span className="person">{props.person}</span>
      </p>
    </div>
  );
};

export default Card;
