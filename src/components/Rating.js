import React from "react";

const Rating = props => {
  return [...Array(parseInt(props.rating, 10))].map((item, index) => (
    <i key={index} className="fa fa-star" />
  ));
};

export default Rating;
