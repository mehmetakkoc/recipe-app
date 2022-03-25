import React from "react";


const Recipe = ({recipe}) => {
  return (
    <div>
      <img src={recipe["recipe"]["image"]} alt="" />
    </div>
  );
};

export default Recipe;
