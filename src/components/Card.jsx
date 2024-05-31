import React from "react";
import { useState } from "react";

const Card = ({ id, imageLink, info, place, price, deleter, selector }) => {
  const [readmore, setReadmore] = useState(false);
  const readMoreHandler = () => {
    setReadmore(!readmore);
  };
  const description = readmore ? info : `${info.substring(0, 200)}....`;
  return (
    <div className="card">
      <div className="card-div">
        <img src={imageLink} alt="" />
      </div>
      <div className="card-content">
        <h2>{place}</h2>
        <h3>{price}</h3>
        <p>
          {description}{" "}
          <span
            className="span_showmore_showless"
            onClick={() => readMoreHandler()}
          >
            {readmore ? "show less" : "show more"}
          </span>
        </p>

        <div className="buttons">
          <button onClick={() => selector(id)}>Interested</button>
          <button onClick={() => deleter(id)}>Not Interested</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
