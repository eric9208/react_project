import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const handleBoardClick = () => {
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
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
          activePlayer={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
