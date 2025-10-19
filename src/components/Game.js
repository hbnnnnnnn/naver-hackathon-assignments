import React, { useState, useEffect, useRef, useCallback } from "react";
import Board from "./Board";

const calculateWinner = (board) => {
  const lines = [
    // rows
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    // columns
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    // diagonals
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],
  ];

  for (const line of lines) {
    const values = line.map((i) => board[i]);
    if (values.every((v) => v !== 0 && v % 2 === 1)) {
      return 'Odd';
    }
    if (values.every((v) => v !== 0 && v % 2 === 0)) {
      return 'Even';
    }
  }

  if (board.every((v) => v !== 0)) {
    return 'Draw';
  }

  return null;
};

function Game() {
  const [squares, setSquares] = useState(Array(25).fill(0));
  const [player, setPlayer] = useState(null);
  const [winner, setWinner] = useState(null);
  const [roomId, setRoomId] = useState(null)
  const wsRef = useRef(null);

  const handleOnMessage = useCallback((event) => {
    const { type, data } = JSON.parse(event.data);
  
    console.log('player', player);
    switch(type) {
      case 'start':
        setPlayer(data.player);
        setRoomId(data.roomId)
        
        break;
      case 'display':
        setSquares(data.squares);
        break;
      
      case 'restart':
        setWinner(null);
        setSquares(Array(25).fill(0));
        break;
      default:
        break;
    }
  }, [player]);

  useEffect(() => {
    if (wsRef.current) {
      return;
    }

    const ws = new WebSocket('ws://localhost:8080');
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: 'prepare'
      }));
    };

    wsRef.current.onmessage = handleOnMessage;

    return () => {
      console.log('close');
      ws.close();
      wsRef.current = null;
    }

  }, []);

  useEffect(() => {
    setWinner(calculateWinner(squares));
  }, [squares]);


  const handleClick = (i) => {
    if (winner) {
      return;
    }

    squares[i] += 1;
    setSquares([...squares]);

    wsRef.current.send(JSON.stringify({
      data: {
        roomId,
        squares,
        nextPlayer: player === 'Odd' ? 'Even' : 'Odd',
      },
      type: 'move',
    }));
  };

  const handleRestart = () => {
    setWinner(null);
    setSquares(Array(25).fill(0));
    wsRef.current.send(JSON.stringify({
      type: 'restart',
      data: {
        roomId,
      },
    }));
  };

  return (
    <div className="main">
      <h2 className="result">Winner is: {winner ? winner : "N/N"}</h2>
      <span>{player}</span>
      <div className="game">
        <Board squares={squares} handleClick={handleClick} />
      </div>
      <button onClick={handleRestart} className="restart-btn">
        Restart
      </button>
    </div>
  );
}

export default Game;