import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";
import { useState } from "react";
function App() {
  const [playerName, setPlayerName] = useState("Unknown Entity");
  return (
    <>
      <Player playerName={playerName} setPlayerName={setPlayerName} />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} playerName={playerName} />
        <TimerChallenge
          title="Not Easy"
          targetTime={5}
          playerName={playerName}
        />
        <TimerChallenge
          title="Getting tough"
          targetTime={10}
          playerName={playerName}
        />
        <TimerChallenge
          title="Pros only"
          targetTime={15}
          playerName={playerName}
        />
      </div>
    </>
  );
}

export default App;
