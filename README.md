# Tic Tac Toe Game with AI

A modern Tic Tac Toe game built with React that features AI opponents with different difficulty levels. Play against an intelligent computer opponent that uses the minimax algorithm for strategic gameplay.

## Features

- **Single Player Mode**: Play against AI opponents
- **Two Difficulty Levels**:
  - **Easy**: AI makes random moves
  - **Hard**: AI uses minimax algorithm for optimal play
- **Clean UI**: Simple, modern interface with smooth interactions
- **Real-time Game Status**: Shows current player turn and game results
- **Game Reset**: Start a new game at any time
- **Responsive Design**: Works on desktop and mobile devices

## How to Play

1. Choose your difficulty level (Easy or Hard)
2. You play as "X" and the AI plays as "O"
3. Click on any empty square to make your move
4. The AI will automatically make its move after yours
5. Get three in a row (horizontally, vertically, or diagonally) to win
6. Click "New Game" to restart and return to the menu

## Game Rules

- Players alternate turns placing X's and O's on a 3x3 grid
- The first player to get 3 of their marks in a row wins
- If all 9 squares are filled and no player has 3 in a row, the game is a draw

## Technology Stack

- **React**: Frontend framework
- **CSS3**: Styling and animations
- **Minimax Algorithm**: AI decision making for hard mode

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/hbnnnnnnn/naver-hackathon-minimax.git
   ```

2. Navigate to the project directory:
   ```bash
   cd naver-hackathon-minimax
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── Board.js      # Game board component
│   ├── Game.js       # Main game logic and state management
│   ├── Menu.js       # Difficulty selection menu
│   └── Square.js     # Individual square component
├── App.js            # Main app component
├── App.css           # Styling
└── index.js          # React entry point
```

## AI Implementation

The AI uses different strategies based on difficulty:

- **Easy Mode**: Makes random moves from available squares
- **Hard Mode**: Implements the minimax algorithm to find optimal moves, making it nearly impossible to beat

The minimax algorithm evaluates all possible future game states to choose the move that maximizes the AI's chances of winning while minimizing the player's chances.
