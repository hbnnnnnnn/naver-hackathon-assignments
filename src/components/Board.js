import React from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square 
          key={index}
          handleClick={() => handleClick(index)} 
          value={square}
        />
      ))}
    </div>
  );
}
