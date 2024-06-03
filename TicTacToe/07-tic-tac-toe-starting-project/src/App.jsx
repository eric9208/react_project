import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  const handleBoardClick = (rowIndex, colIndex) => {
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={"Player 1"}
            symbol={"X"}
            activePlayer={activePlayer === "X"}
          />
          <Player
            name={"Player 2"}
            symbol={"O"}
            activePlayer={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onBoardClick={handleBoardClick}
          turns={gameTurns}
          activePlayer={activePlayer}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
