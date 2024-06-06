import { useState, useRef } from "react";

export default function Player({ playerName, setPlayerName }) {
  const playerNameRef = useRef();

  const handleClick = () => {
    setPlayerName(playerNameRef.current.value);
    playerNameRef.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "Unknown Entity"}</h2>
      <p>
        <input ref={playerNameRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
