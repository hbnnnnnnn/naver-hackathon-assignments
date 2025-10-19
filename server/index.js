const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });
const rooms = {};
let roomId = 0;

const createEmptyBoard = () => Array(25).fill(0);

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

server.on('connection', (ws) => {
    ws.on('message', (msg) => {
        const { type, data } = JSON.parse(msg);

        switch(type) {
            case 'prepare':
                if (rooms[roomId]?.players?.length === 2) {
                    roomId++;
                }

                if (!rooms[roomId]) {
                    rooms[roomId] = {
                        players: [],
                        board: createEmptyBoard(),
                        winner: null,
                    };
                }

                const room = rooms[roomId];
                room.players.push(ws);

                const playerSymbol = room.players.length === 1 ? 'Odd' : 'Even';

                ws.send(JSON.stringify({
                    type: 'start',
                    data: {
                        player: playerSymbol,
                        roomId,
                    },
                }));

                if (room.players.length === 2) {
                    room.players.forEach((socket) =>
                        socket.send(JSON.stringify({
                        type: 'ready',
                        data: { message: 'Both players connected!' },
                        }))
                    );
                    break;
                }
                break;
            case 'increment':
                const { roomId: incrementRoomId, square } = data;
                const incrementRoom = rooms[incrementRoomId];
                if (!incrementRoom || incrementRoom.winner) return;

                const currentValue = incrementRoom.board[square];
                const newValue = currentValue + 1;
                incrementRoom.board[square] = newValue;

                incrementRoom.players.forEach((socket) => {
                    socket.send(JSON.stringify({
                        type: 'update',
                        data: {
                            square: data.square,
                            value: newValue,
                        }
                    }));
                });

                const winner = calculateWinner(incrementRoom.board);
                if (winner) {
                    incrementRoom.winner = winner;
                    incrementRoom.players.forEach((socket) => {
                        socket.send(JSON.stringify({
                            type: 'gameover',
                            data: {
                                winner: incrementRoom.winner,
                            }
                        }));
                    });
                }

                break;
            case 'restart': {
                const { roomId: restartRoomId } = data;
                const restartRoom = rooms[restartRoomId];
                if (!restartRoom) return;

                restartRoom.board = createEmptyBoard();
                restartRoom.winner = null;

                restartRoom.players.forEach((socket) =>
                socket.send(JSON.stringify({
                    type: 'restart',
                    data: {
                    board: restartRoom.board,
                    winner: null,
                    },
                }))
                );
                break;
            }
            default:
                break;
        }
    });
});