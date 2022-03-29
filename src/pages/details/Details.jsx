import React from "react";


const Details = ({recipe}) => {
  return (
    <div>
      <img src={recipe["recipe"]["image"]} alt="" />
    </div>
  );
};

export default Details;
