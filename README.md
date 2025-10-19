# Multiplayer Odd/Even Tic-Tac-Toe

A real-time multiplayer game demonstrating distributed systems concepts with WebSocket communication, server authority, and operational transforms.

## 🎮 Game Rules

- **5x5 board** with all squares starting at 0
- **Odd Player** wins when any row, column, or diagonal has all odd numbers (1, 3, 5, 7, 9...)
- **Even Player** wins when any row, column, or diagonal has all even numbers (2, 4, 6, 8, 10...)
- **Click any square** to increment its number by 1
- **No turns** - both players can click simultaneously and race for control!
- **Strategy**: Fight over the same squares to keep them in your favor (odd/even)

## 🚀 Features

### ✅ **Implemented Features:**

- **Real-time Multiplayer**: WebSocket-based communication for instant updates
- **Server Authority**: Server maintains game state and validates all moves
- **Operational Transforms**: Sends individual increment operations instead of full state
- **Room Management**: Automatic room assignment supporting multiple concurrent games
- **Connection Status**: Real-time status updates (Connecting, Connected, Waiting, Ready, etc.)
- **Clean UI**: Modern interface with consistent design and color-coded feedback
- **Win Detection**: Server-side validation for all winning conditions
- **Game Restart**: Complete game reset functionality
- **Error Handling**: Connection error detection and user feedback

### 🎯 **Game Flow:**

1. **Connection**: Client connects to WebSocket server
2. **Room Assignment**: Server assigns players to available rooms (max 2 per room)
3. **Player Roles**: First player becomes "Odd", second becomes "Even"
4. **Gameplay**: Both players increment squares simultaneously
5. **Win Detection**: Server checks for winning conditions after each move
6. **Game Over**: Winner announced, option to restart

## 🛠 How to Run

### Prerequisites:
- Node.js installed
- Two browser windows/tabs for testing multiplayer

### Start the Server:
```bash
cd server
node index.js
# Server runs on ws://localhost:8080
```

### Start the Client:
```bash
npm start
# Client runs on http://localhost:3000
```

### Play:
1. Open two browser windows/tabs to `http://localhost:3000`
2. Both players will be automatically connected and assigned roles
3. Wait for "Both players connected - Game ready!" status
4. Click squares to increment numbers and race for winning lines!
5. Use "New Game" button to restart when ready

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Game.js       # Main game logic, WebSocket handling, UI state
│   │   ├── Board.js      # 5x5 grid layout component
│   │   └── Square.js     # Individual clickable squares with hover effects
│   ├── App.js           # Root component
│   └── App.css          # Styling with consistent design system
├── server/
│   └── index.js         # WebSocket server with room management & game logic
└── package.json         # Dependencies and scripts
```

## 🔧 Technical Architecture

### WebSocket Message Protocol:

**Client → Server Messages:**
```javascript
// Join game
{ type: 'prepare' }

// Make move
{ 
  type: 'increment', 
  data: { roomId: 0, square: 12 } 
}

// Restart game
{ 
  type: 'restart', 
  data: { roomId: 0 } 
}
```

**Server → Client Messages:**
```javascript
// Player assignment
{ 
  type: 'start', 
  data: { player: 'Odd', roomId: 0 } 
}

// Both players ready
{ 
  type: 'ready', 
  data: { message: 'Both players connected!' } 
}

// Move update
{ 
  type: 'update', 
  data: { square: 12, value: 3 } 
}

// Game over
{ 
  type: 'gameover', 
  data: { winner: 'Odd' } 
}

// Game restart
{ 
  type: 'restart', 
  data: { board: [0,0,0...], winner: null } 
}
```

### Server Architecture:
- **Room Management**: Automatic room creation and player assignment
- **State Management**: Server maintains authoritative game state
- **Win Detection**: Server-side validation using optimized line checking
- **Concurrent Handling**: Supports multiple simultaneous games

### Client Architecture:
- **React Hooks**: useState, useEffect, useRef, useCallback for state management
- **WebSocket Integration**: Real-time bidirectional communication
- **Status Management**: Connection and game state tracking
- **UI Updates**: Responsive interface with immediate visual feedback

## 🎯 Distributed Systems Concepts Demonstrated

1. **Server Authority**: 
   - Server maintains single source of truth
   - All moves validated server-side
   - Prevents inconsistent states across clients

2. **Operational Transforms**:
   - Sends atomic operations (`increment square X`) instead of full state
   - Enables concurrent modifications without conflicts
   - Optimizes network traffic

3. **Real-time Communication**:
   - WebSocket for low-latency bidirectional updates
   - Immediate feedback for all connected players
   - Connection state management

4. **State Synchronization**:
   - All clients receive identical game state updates
   - Server broadcasts changes to all room participants
   - Consistent game experience across all players

## 🎨 UI/UX Features

- **Status Indicators**: Color-coded status messages with consistent styling
- **Player Identification**: Clear display of player role (Odd/Even)
- **Room Information**: Room ID display for debugging/reference
- **Winner Announcement**: Prominent but consistent winner display
- **Visual Feedback**: Hover effects and color-coding for odd/even numbers
- **Responsive Design**: Clean, modern interface that works across devices

## 🧠 Technical Highlights

- **Efficient Win Detection**: O(1) win checking using predefined line arrays
- **Memory Management**: Proper WebSocket cleanup and connection handling
- **Error Recovery**: Connection error detection and user notification
- **Scalable Architecture**: Room-based system supports unlimited concurrent games
- **Type Safety**: Consistent message protocol with proper data validation

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
