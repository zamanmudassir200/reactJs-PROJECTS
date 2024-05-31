import React from "react";
import Card from "./Card";
const Cards = ({ data, deleter, selector }) => {
  return (
    <div className="main-container">
      {data.map((da) => {
        return (
          <Card key={da.id} {...da} deleter={deleter} selector={selector} />
        );
      })}
    </div>
  );
};

export default Cards;
