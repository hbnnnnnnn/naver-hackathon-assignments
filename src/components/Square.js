import React from "react";

function Square({ handleClick, value, disabled = false }) {
  const isOdd = value !== 0 && value % 2 === 1;
  const isEven = value !== 0 && value % 2 === 0;

  return (
    <button 
      className="square" 
      onClick={handleClick}
      disabled={disabled}
      data-odd={isOdd}
      data-even={isEven}
      title={value === 0 ? "Click to increment" : `Value: ${value} (${isOdd ? 'Odd' : isEven ? 'Even' : 'Zero'})`}
    >
      {value}
    </button>
  );
}

export default Square;
