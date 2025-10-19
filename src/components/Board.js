import Square from "./Square";

export default function Board({ squares, handleClick, disabled = false }) {
  const squareComponents = squares.map((square, index) => (
    <Square 
      key={index}
      handleClick={() => handleClick(index)} 
      value={square}
      disabled={disabled}
    />
  ));

  return (
    <div className="board">
      <div>
        <div className="board-row">
          {squareComponents.slice(0, 5)}
        </div>
        <div className="board-row">
          {squareComponents.slice(5, 10)}
        </div>
        <div className="board-row">
          {squareComponents.slice(10, 15)}
        </div>
        <div className="board-row">
          {squareComponents.slice(15, 20)}
        </div>
        <div className="board-row">
          {squareComponents.slice(20, 25)}
        </div>
      </div>
    </div>
  );
}
