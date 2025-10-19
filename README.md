# Week 2 Assignment: Multiplayer Odd/Even Tic-Tac-Toe

A real-time multiplayer game demonstrating distributed systems concepts like server authority, operational transforms, and WebSocket communication.

## 🎮 Game Rules

- **5x5 board** with all squares starting at 0
- **Odd Player** wins when any row, column, or diagonal has all odd numbers
- **Even Player** wins when any row, column, or diagonal has all even numbers  
- **Click any square** to increment its number by 1
- **No turns** - both players can click any square at any time!
- **Strategy**: Fight over the same squares to keep them odd/even

## 🎯 Learning Objectives

This assignment teaches core distributed systems concepts:

1. **Server Authority** - Server maintains the single source of truth
2. **Operational Transforms** - Send operations, not states, to handle concurrent actions
3. **WebSocket Communication** - Real-time bidirectional updates

## 🚀 Current Implementation Status

### ✅ **Completed Features:**

- **5x5 Game Board**: Properly displays 25 squares in a grid
- **Number Increment**: Clicking squares increments values by 1
- **Win Detection**: Correctly checks all rows, columns, and diagonals
- **Player Assignment**: First player becomes Odd, second becomes Even
- **WebSocket Connection**: Real-time communication between client and server
- **Game Restart**: Ability to reset the game board
- **Room System**: Multiple games can run simultaneously

### ⚠️ **Areas for Improvement:**

- **Server Authority**: Currently client updates UI before server confirmation
- **Operational Transforms**: Sending full board state instead of operations
- **Connection Status**: No "Connected/Waiting for opponent" display
- **Game Over Handling**: Win detection only on client, not server-side
- **Message Protocol**: Custom format instead of assignment-specified protocol

## 🛠 How to Run

### Start the Server:
```bash
cd server
node index.js
```

### Start the Client:
```bash
npm start
```

### Play:
1. Open two browser windows to `http://localhost:3000`
2. First player becomes "Odd", second becomes "Even"
3. Click squares to increment numbers
4. First to get 5 odd or even numbers in a line wins!

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Game.js       # Main game logic and WebSocket handling
│   │   ├── Board.js      # 5x5 grid layout
│   │   └── Square.js     # Individual clickable squares
│   └── App.js           # Root component
├── server/
│   └── index.js         # WebSocket server with room management
└── package.json         # Dependencies
```

## 🔧 Technical Architecture

### Client-Server Communication:

**Current Message Format:**
```javascript
// Client -> Server (move)
{
  type: 'move',
  data: {
    roomId: '123',
    squares: [0,1,2,...], // full board state
    nextPlayer: 'Even'
  }
}

// Server -> Client (update)
{
  type: 'display',
  data: {
    squares: [0,1,2,...] // full board state
  }
}
```

### Room Management:
- Server automatically assigns players to rooms
- Maximum 2 players per room
- New room created when current room is full

## 🎯 Next Steps for Full Assignment Compliance

To meet all assignment requirements, consider implementing:

1. **True Server Authority**: Wait for server confirmation before updating UI
2. **Operational Transforms**: Send `{type: 'INCREMENT', square: 12}` instead of full state
3. **Connection Status UI**: Show "Connected", "Disconnected", "Waiting for opponent"
4. **Server-side Win Detection**: Move win logic to server
5. **Assignment Message Protocol**: Match the specified WebSocket message format

## 🧠 Key Distributed Systems Concepts Demonstrated

- **Consistency**: Server as single source of truth prevents conflicting states
- **Concurrency**: Multiple players can act simultaneously without data loss
- **Real-time Communication**: WebSocket enables instant updates across clients
- **State Synchronization**: All clients see the same game state

# Tic Tac Toe Game



Props are one of the most basic and important properties in React.
The purpose of this project is to practice our skills with React props.

Let's create a mini "Tic Tac Toe" game to play with family and friends.

| ![](https://i.ibb.co/7kxyMb4/Screenshot-from-2022-05-12-01-32-13.png) |
| :-------------------------------------------------------------------: |
|                      _ Tic Tac Toe_                      |

[Go to demo website !](https://tic-tac-toe-game-trancaodua.netlify.app/)

## User Story

- Has two player "X" and "O".
- Every player turns tick "X" or "O" on square.
- Player has 3 ("X" or "O") consecutive is winner.
- Click "Restart" to restart game.
- :rocket: Storing a history of moves.
- :rocket::rocket::rocket: Player can undo move.

## Requirement

Fork this [repo](https://github.com/trancaodua/tic-tac-toe-game) and read through the files.
Often time , developers are required to work with an existing codebase and improve upon. This is one of that time. 

Repositories has 3 branch:
- Requirements: Has requirements. You will code on this branch.
- Solution: Has answers of requirements.
- Advance solution: Has :rocket: answers of requirements.

Guide checkout ````requirements```` branch to code:
- Step 1: Clone repositories. Run: ````git clone https://github.com/trancaodua/tic-tac-toe-game.git````
- Step 2: Checkout requirement brank to do. Run: ````git checkout requirements````

Guide checkout ````solution```` branch to check answer:
- Step 1: Checkout solution brank to do. Run: ````git checkout solution````

Guide checkout ````advance_solution```` brank to check :rocket: answer:
- Step 1: Checkout solution brank to do. Run: ````git checkout advance_solution````

You should only code in the designinated area.
Using the VSC search function for "Your code here", you will see a list of all the placces that required your attention.
