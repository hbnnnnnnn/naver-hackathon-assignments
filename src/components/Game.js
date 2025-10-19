import React, { useState, useEffect, useRef, useCallback } from "react";
import Board from "./Board";

function Game() {
  const [squares, setSquares] = useState(Array(25).fill(0));
  const [player, setPlayer] = useState(null);
  const [winner, setWinner] = useState(null);
  const [status, setStatus] = useState("Connecting...");
  const [roomId, setRoomId] = useState(null);
  const wsRef = useRef(null);

  const handleOnMessage = useCallback((event) => {
    const { type, data } = JSON.parse(event.data);
  
    switch(type) {
      case 'start':
        setPlayer(data.player);
        setRoomId(data.roomId);
        setStatus("Waiting for opponent...");
        break;
      
      case 'restart':
        setWinner(null);
        setSquares(Array(25).fill(0));
        setStatus("Game restarted - Ready to play!");
        break;
      
      case 'update':
        setSquares(prev => {
          const newSquares = [...prev];
          newSquares[data.square] = data.value;
          return newSquares;
        });
        break;

      case 'gameover':
        setWinner(data.winner);
        setStatus(`Game Over - ${data.winner} wins!`);
        break;

      case 'ready':
        setStatus("Both players connected - Game ready!");
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
      setStatus("Connected - Joining game...");
      ws.send(JSON.stringify({
        type: 'prepare'
      }));
    };

    ws.onclose = () => {
      setStatus("Disconnected");
    };

    ws.onerror = () => {
      setStatus("Connection error");
    };

    wsRef.current.onmessage = handleOnMessage;

    return () => {
      ws.close();
      wsRef.current = null;
    }

  }, []);

  const handleClick = (i) => {
    if (winner) {
      return;
    }

    wsRef.current.send(JSON.stringify({
      data: {
        roomId,
        square: i,
      },

      type: 'increment',
    }));
  };

  const handleRestart = () => {
    wsRef.current.send(JSON.stringify({
      type: 'restart',
      data: {
        roomId,
      },
    }));
  };

  return (
    <div className="main">
      <div className="game-header">
        <h1>Minimax Game</h1>
        <div className="game-info">
          <div className="status">Status: {status}</div>
          {player && <div className="player-info">You are: <strong>{player}</strong></div>}
          {roomId !== null && <div className="room-info">Room: {roomId}</div>}
        </div>
        {winner && <div className="winner-announcement">🎉 {winner} Wins! 🎉</div>}
      </div>
      <div className="game">
        <Board squares={squares} handleClick={handleClick} />
      </div>
      <button onClick={handleRestart} className="restart-btn">
        Restart Game
      </button>
    </div>
  );
}

export default Game;