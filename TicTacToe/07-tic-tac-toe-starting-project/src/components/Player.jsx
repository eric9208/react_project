import { useState } from "react";

export default function Player({ name, symbol, activePlayer, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  const [buttonText, setButtonText] = useState("Edit");

  const handleEditButton = () => {
    if (!isEditing) {
      setButtonText("Save");
      setIsEditing(true);
    } else {
      setButtonText("Edit");
      setIsEditing(false);
      onChangeName(symbol, playerName);
    }
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <li className={activePlayer ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            onChange={handleChange}
            required
          ></input>
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditButton}>{buttonText}</button>
    </li>
  );
}
