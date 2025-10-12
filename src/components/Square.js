import React from "react";

function Square({ handleClick, value }) {
  const getSquareClass = () => {
    let classes = "square";
    if (value === "X") {
      classes += " square-x";
    } else if (value === "O") {
      classes += " square-o";
    }
    return classes;
  };

  return (
    <button className={getSquareClass()} onClick={handleClick}>
      <span className="square-content">{value}</span>
    </button>
  );
}

export default Square;
